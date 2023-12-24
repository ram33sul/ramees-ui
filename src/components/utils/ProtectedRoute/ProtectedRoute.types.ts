import { ReactNode } from "react"

export type Props = {
    children: ReactNode,
    isLoggedIn: boolean,
    shouldLogout?: boolean,
    setPageBeforeLogin?: (page: string) => unknown,
}