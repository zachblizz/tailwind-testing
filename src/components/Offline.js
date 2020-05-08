import React from "react";

export default function Offline() {
    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="w-3/4 flex justify-center grid grid-cols-2 divide-x-2 divide-gray-500">
                <div className="flex justify-end items-center pr-4 text-xl">Uh Oh</div>
                <div className="pl-4 text-sm text-gray-600">
                    Looks like you need to pay your internet bill. Please do so, and refresh the page
                </div>
            </div>
        </div>
    );
}
