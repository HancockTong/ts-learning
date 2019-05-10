import * as React from "react";
import * as ReactDom from "react-dom";
import CounterComponent from "./components/Counter";


ReactDom.render(
    <CounterComponent name="hanck"/>,
    document.getElementById("app")
)
