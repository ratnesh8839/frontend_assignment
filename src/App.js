import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Cards";
import Body from "./Body";

const App = () =>{
    return(
        <div className="app">
            <Body />
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);
