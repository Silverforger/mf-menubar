import React from "react";
import { createRoot } from "react-dom/client";
import MenuBar from "./MenuBar";
import { BrowserRouter } from "react-router-dom";

const placeMenuBar = (node, routesProp, navigateProp) => {
    if (node === null || node === undefined || typeof node !== "object") return;

    const root = createRoot(node);
    root.render(
        <BrowserRouter>
            <MenuBar routes={routesProp} navigate={navigateProp} />
        </BrowserRouter>
    );
};

export default placeMenuBar;
