import { CSSProperties, MouseEventHandler } from "react"
import { IconType } from "../../../Types/general"

export type Props = {
    icon: IconType,
    colorType?: "single" | "same" | "opposite",
    style?: CSSProperties,
    size?: number,
    onClick?: MouseEventHandler<HTMLImageElement>,
    isClickable?: boolean,
}