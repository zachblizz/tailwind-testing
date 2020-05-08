import { useEffect } from "react";

import useBoolean from "./useBoolean";

export default function useOnline() {
    const [online, { on, off }] = useBoolean(navigator?.onLine);

    useEffect(() => {
        window.addEventListener('online', on);
        window.addEventListener('offline', off);

        return () => {
            window.removeEventListener('online', on);
            window.removeEventListener('offline', off);
        }
    }, [on, off]);

    return online;
}
