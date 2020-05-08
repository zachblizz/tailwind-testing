import { useEffect } from "react";

import useBoolean from "./useBoolean";

export default function useOnline() {
    const [isOnline, { on: online, off: offline }] = useBoolean(navigator?.onLine);

    useEffect(() => {
        window.addEventListener('online', online);
        window.addEventListener('offline', offline);

        return () => {
            window.removeEventListener('online', online);
            window.removeEventListener('offline', offline);
        }
    }, [online, offline]);

    return isOnline;
}
