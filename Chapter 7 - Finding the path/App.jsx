import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import Body from "./src/components/Body.jsx";

const AppyLayout = () => {
    return (<>
        <Header />
        <Body />
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppyLayout />);