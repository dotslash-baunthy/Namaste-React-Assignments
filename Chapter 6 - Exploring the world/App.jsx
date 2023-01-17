import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent.jsx";
import { BodyComponent } from "./src/components/BodyComponent.jsx";

const AppyLayout = () => {
    return (<>
        <HeaderComponent />
        <BodyComponent />
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppyLayout />);