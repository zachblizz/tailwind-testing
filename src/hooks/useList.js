import { useContext, createContext } from "react";

const ListContext = createContext(false);

export function useList() {
    const isList = useContext(ListContext);

    if (isList === undefined) {
        throw new Error(`useList must be under ListContext.Provider`);
    }

    return isList;
}

export default ListContext;
