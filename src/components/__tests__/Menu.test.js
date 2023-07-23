import RestaurantMenu from "../Body";
import {render, waitFor,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {RESTAURANT_DATA} from "../../mocks/data";
import Header from "../Header";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})
test("Add Items to Cart",async ()=>{
    const restaurantMenu=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=>expect(restaurantMenu.getByTestId("menu")))
    const menu=restaurantMenu.getByTestId("menu");

    // fire event given by testing library
    fireEvent.change(input,{target:{
        value:"food"
    }})

    const searchBtn=body.getByTestId("search-btn");
    fireEvent.click(searchBtn)
    const resList=body.getByTestId("res-list");
    expect(resList.children.length).toBe(1);
    
})