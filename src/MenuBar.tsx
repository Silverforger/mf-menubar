import "tailwindcss/tailwind.css";

import React, { useRef, useState } from "react";

import useOnClickOutside from "./hooks/useOnClickOutside";

interface MenuBarProps {
    routes: Route[];
    navigate: Function;
}

interface Route {
    path: string;
    label: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ routes, navigate }) => {
    const menuRef = useRef(null);

    const [showMenuBar, setShowMenubar] = useState<boolean>(false);

    const handleNavigate = (path: string): void => {
        navigate(path);
    };

    const handleShowMenuBar = (): void => setShowMenubar(!showMenuBar);

    useOnClickOutside(menuRef, () => setShowMenubar(false));

    return (
        <div className="py-2 justify-between select-none asdasd">
            <div
                id="menubar-uq"
                ref={menuRef}
                className="relative w-[80px] h-[40px] bg-[#4F517D] text-white font-[500] rounded-[15px] flex items-center justify-center cursor-pointer"
                onClick={handleShowMenuBar}
            >
                Menu
                {showMenuBar && (
                    <div className="absolute top-[45px] left-[0] w-[150px] min-h-[200px] p-3 rounded-[15px] bg-[#4F517D] flex flex-col gap-[5px]">
                        {routes.map((route: Route, index: number) => (
                            <div
                                onClick={() => handleNavigate(route.path)}
                                key={`${route.label.toLowerCase()}-${index}`}
                            >
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
