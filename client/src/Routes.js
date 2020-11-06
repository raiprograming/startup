import React from "react";

import {BrowserRouter,Link,Route,Switch} from "react-router-dom";
import Home from "./Home/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
        
        </BrowserRouter>
    )
}


















