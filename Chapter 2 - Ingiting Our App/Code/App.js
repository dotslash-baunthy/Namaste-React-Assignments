import React from "react";
import ReactDOM from "react-dom/client"

const head1 = React.createElement("h1", {
    class: "heading-bg-colour"
}, "Namaste React")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head1);