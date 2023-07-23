import { render } from "@testing-library/react"
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header",()=>{
    //Load Header
    const header=render(
        <StaticRouter>
             <Provider store={store}>
                <Header/>
             </Provider>
         </StaticRouter>);
    console.log(header);
    //logo 
    const logo=header.getAllByTestId("logo");
    // console.log(logo);

    // expect(logo.src).toBe("dummyLogo.png"); 
    // expect(logo[0].src).toBe("dummyLogo.png");
    expect(logo[0].src).toBe("http://localhost/dummy.png") 
}) 

test("Status should show green on rendering header",()=>{
    const header=render(
        <StaticRouter>
             <Provider store={store}>
                <Header/>
             </Provider>
         </StaticRouter>);
    const onlineStatus=header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe('✅')
})

test("Cart should show 0 items on rendering header",()=>{
    const header=render(
        <StaticRouter>
             <Provider store={store}>
                <Header/>
             </Provider>
         </StaticRouter>);
    const cart=header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 0")
})