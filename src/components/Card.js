import React from "react";

import Button from "./ui/Button";
import Pill from "./ui/Pill";

export default function Card({ pills, title, content, subTitle }) {
    return (
        <div className="mx-2 sm:w-full md:w-full lg:w-1/2 xl:w-1/3 rounded overflow-hidden shadow">
            <div className="max-h-150 overflow-hidden">
                <img
                    className="w-fill"
                    src={require("../assets/newzealand.jpg")}
                    alt="display"
                />
            </div>
            <div className="h-content min-h-content max-h-content px-6 py-4">
                <div className="font-bold text-purple-700 text-md mb-2">
                    {title}
                </div>
                <div className="font-bold text-gray-900 text-lg mb-2">
                    {subTitle}
                </div>
                <p className="text-gray-500 text-base">
                    {content}
                </p>
            </div>
            <div className="px-6 py-1">
                <Button btnTxt="read more &rarr;" primary onClick={() => alert("clicked")} />
            </div>
            <div className="px-6 py-4">
                {pills?.map((txt) => <Pill key={txt} hash inline>{txt}</Pill>)}
            </div>
        </div>
    );
}
