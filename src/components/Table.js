import React from "react";

import Td from "./ui/table/Td";
import Th from "./ui/table/Th";
import Pill from "./ui/Pill";

export default function Table() {
    return (
        <table className="table-auto w-full border-solid border-2 border-gray-200 mb-4">
            <thead>
                <tr>
                    <Th onClick={() => console.log("header one clicked")}>one</Th>
                    <Th>two</Th>
                    <Th>Three</Th>
                    <Th>four</Th>
                    <Th>four</Th>
                    <Th>four</Th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Td>This is a longer column</Td>
                    <Td>someThing</Td>
                    <Td>here is now</Td>
                    <Td>anoTher column widTh</Td>
                    <Td>anoTher column widTh</Td>
                    <Td>anoTher column widTh</Td>
                </tr>
                <tr>
                    <Td>This is a longer column</Td>
                    <Td><Pill txt="something" hash color="warning" /></Td>
                    <Td>here is now</Td>
                    <Td>anoTher column widTh</Td>
                    <Td><Pill txt="something" hash color="warning" /></Td>
                    <Td><Pill txt="something" hash color="warning" /></Td>
                </tr>
                <tr>
                    <Td>This is a longer column</Td>
                    <Td><Pill txt="whoops" hash color="danger" /></Td>
                    <Td>here is now</Td>
                    <Td>anoTher column widTh</Td>
                    <Td><Pill txt="whoops" hash color="danger" /></Td>
                    <Td><Pill txt="whoops" hash color="warning" /></Td>
                </tr>
                <tr>
                    <Td>This is a longer column</Td>
                    <Td><Pill txt="success here" hash color="success" /></Td>
                    <Td>here is now</Td>
                    <Td>anoTher column widTh</Td>
                    <Td><Pill txt="success here" hash color="success" /></Td>
                    <Td><Pill txt="success here" hash /></Td>
                </tr>
                <tr>
                    <Td>This is a longer column</Td>
                    <Td><Pill txt="nothing special" hash /></Td>
                    <Td>here is now</Td>
                    <Td>anoTher column widTh</Td>
                    <Td><Pill txt="nothing special" hash color="warning" /></Td>
                    <Td><Pill txt="nothing special" hash color="primary" /></Td>
                </tr>
            </tbody>
        </table>
    );
}
