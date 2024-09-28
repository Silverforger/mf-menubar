import 'tailwindcss/tailwind.css'

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import useOnClickOutside from "./hooks/useOnClickOutside";

interface MenuBarProps {
    routes: Route[];
}

interface Route {
    path: string;
    label: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ routes }) => {
    const navigate = useNavigate();

    const menuRef = useRef(null);

    const [showMenuBar, setShowMenubar] = useState<boolean>(false);

    const handleNavigate = (path: string): void => {
        navigate(path);
    };

    const handleShowMenuBar = (): void => setShowMenubar(!showMenuBar);

    useOnClickOutside(menuRef, () => setShowMenubar(false));

    return (
        <div className="py-2 justify-between select-none">
            <div
                ref={menuRef}
                className="relative w-[80px] h-[40px] bg-[#4F517D] text-white font-[500] rounded-[15px] flex items-center justify-center cursor-pointer"
                onClick={handleShowMenuBar}
            >
                Menu
                {showMenuBar && (
                    <div className="absolute top-[45px] left-[0] w-[150px] min-h-[200px] p-3 rounded-[15px] bg-[#4F517D]">
                        {routes.map((route: Route) => (
                            <div onClick={() => handleNavigate(route.path)}>
                                {route.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuBar;
