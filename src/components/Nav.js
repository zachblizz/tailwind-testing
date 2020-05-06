import React, { useState, useCallback } from "react";
import Menu from "react-heroicons/dist/MdMenu";
import Ex from "react-heroicons/dist/MdX";

import Button from "./ui/Button";
import NavItem from "./ui/nav/NavItem";
import clsx from "clsx";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen((o) => !o);
    }, [setOpen]);

    return (
        <header className="bg-purple-700 fixed z-10 w-full">
            <div className="container bg-purple-700 sm:flex sm:justify-between sm:items-center sm:px-4 lg:px-10 sm:py-3">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <div className="font-bold text-white rounded bg-gray-200 bg-opacity-50 h-full p-3">
                            Specialty Webz
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <Button
                            type="button"
                            onClick={handleClick}
                            classes="border-none text-gray-200 bg-purple-700"
                        >
                            {!open ? (
                                <Menu className="h-6 w-6" />
                            ) : (
                                <Ex className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
                <div
                    className={clsx(
                        "text-gray-200 px-2 pt-2 pb-4 sm:p-0 sm:flex",
                        open ? "block" : "hidden",
                    )}
                >
                    <NavItem first content="Somethig here" open={open} />
                    <NavItem content="Another Link" open={open} />
                    <NavItem content="Last Link" open={open} />
                </div>
            </div>
        </header>
    );
}
