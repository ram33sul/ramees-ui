import { ReactNode } from "react"

export type Props = {
    routes: {
        path: string,
        element: ReactNode,
        isProtected?: boolean,
        shouldLogout?: boolean
    }[],
    isLoggedIn: boolean,
    setPageBeforeLogin: (page: string) => unknown
}