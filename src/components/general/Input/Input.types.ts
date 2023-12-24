import { CSSProperties, ChangeEventHandler } from "react"

export type Props = {
    value?: string | number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    error?: string,
    label?: string,
    type?: "text" | "number" | "email",
    style?: CSSProperties,
}