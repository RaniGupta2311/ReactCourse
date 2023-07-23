import Body from "../Body";
import {render, waitFor,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {MENU_DATA} from "../../mocks/data";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MENU_DATA)
        }
    })
})

test("Shimmer on load",()=>{
   const body= render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
        )
const shimmer=body.getByTestId("shimmer");
// expect(shimmer.innerHTML).toBeInTheDocument() 
// expect(shimmer.children).toBeInTheDocument()
expect(shimmer.children.length).toBe(10)
console.log(shimmer);
    // console.log(body);

}) 

test("Restaurants should load on Homepage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(body.getByTestId("search-btn")))
    const resList=body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
    
})

test("Search for string(food) on Homepage",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(body.getByTestId("search-btn")))
    const input=body.getByTestId("search-input");

    // fire event given by testing library
    fireEvent.change(input,{target:{
        value:"food"
    }})

    const searchBtn=body.getByTestId("search-btn");
    fireEvent.click(searchBtn)
    const resList=body.getByTestId("res-list");
    expect(resList.children.length).toBe(1);
    
})

// test("Add Items to Cart",async ()=>{
//     const body=render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header/>
//                 <RestaurantMenu/>
//             </Provider>
//         </StaticRouter>
//     );
//     await waitFor(()=>expect(body.getByTestId("menu")))
//     const addBtn=body.getAllByTestId("addBtn");
//     fireEvent.click(addBtn[0]);
//     const cart=body.getByTestId("cart");
//     expect(cart.innerHTML).toBe("Cart Items - 0")
    
// })