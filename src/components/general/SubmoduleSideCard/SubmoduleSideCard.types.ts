import { MouseEventHandler } from "react";

export type Props = {
    contentType: "video" | "quiz" | "reading" ,
    title: string,
    duration?: number,
    isActive?: false,
    isDisabled?: true,
    onClick?: MouseEventHandler<HTMLDivElement> ,
}