import { CSSProperties, MouseEventHandler, ReactNode } from "react"

export type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode,
    loading?: boolean,
    type?: "primary" | "cancel" | "accept" | "reject",
    sizeType?: "large" | "medium" | "small",
    isDisabled?: boolean,
    style?: CSSProperties
}