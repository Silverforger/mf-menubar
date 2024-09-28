import React from "react";
import { createRoot } from "react-dom/client";
import MenuBar from "./MenuBar";
import { BrowserRouter } from "react-router-dom";

const placeMenuBar = (node, routesProp) => {
    if (node === null || node === undefined || typeof node !== "object") return;

    const root = createRoot(node);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <MenuBar routes={routesProp} />
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default placeMenuBar;
