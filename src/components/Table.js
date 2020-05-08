import React from "react";
import clsx from "clsx";

import ListContext from "../hooks/useList";

import Pill from "./ui/Pill";
import { Tr, Th, Td } from "./ui/table";

export default function Table({ even, isList }) {
    return (
        <ListContext.Provider value={{ isList }}>
            <table
                className={clsx(
                    "table-auto w-full border-solid border-2 border-gray-200 mb-4",
                    isList && "border-none",
                    even && "table-even"
                )}
            >
                <thead>
                    <Tr>
                        <Th onClick={() => console.log("header one clicked")}>one</Th>
                        <Th>two</Th>
                        <Th>Three</Th>
                        <Th>four</Th>
                        <Th>four</Th>
                        <Th>four</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>This is a longer column</Td>
                        <Td>someThing</Td>
                        <Td>here is now</Td>
                        <Td>anoTher column widTh</Td>
                        <Td>anoTher column widTh</Td>
                        <Td>anoTher column widTh</Td>
                    </Tr>
                    <Tr>
                        <Td>This is a longer column</Td>
                        <Td><Pill txt="something" hash color="warning" /></Td>
                        <Td>here is now</Td>
                        <Td>anoTher column widTh</Td>
                        <Td><Pill txt="something" hash color="warning" /></Td>
                        <Td><Pill txt="something" hash color="warning" /></Td>
                    </Tr>
                    <Tr>
                        <Td>This is a longer column</Td>
                        <Td><Pill txt="whoops" hash color="danger" /></Td>
                        <Td>here is now</Td>
                        <Td>anoTher column widTh</Td>
                        <Td><Pill txt="whoops" hash color="danger" /></Td>
                        <Td><Pill txt="whoops" hash color="warning" /></Td>
                    </Tr>
                    <Tr>
                        <Td>This is a longer column</Td>
                        <Td><Pill txt="success here" hash color="success" /></Td>
                        <Td>here is now</Td>
                        <Td>anoTher column widTh</Td>
                        <Td><Pill txt="success here" hash color="success" /></Td>
                        <Td><Pill txt="success here" hash /></Td>
                    </Tr>
                    <Tr>
                        <Td>This is a longer column</Td>
                        <Td><Pill txt="nothing special" hash /></Td>
                        <Td>here is now</Td>
                        <Td>anoTher column widTh</Td>
                        <Td><Pill txt="nothing special" hash color="warning" /></Td>
                        <Td><Pill txt="nothing special" hash color="primary" /></Td>
                    </Tr>
                </tbody>
            </table>
        </ListContext.Provider>
    );
}
