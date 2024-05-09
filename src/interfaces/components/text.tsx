import {textStyles} from "../ui";
import {CSSProperties} from "react";

export const Text = ({children, style}: { children: any, style?: CSSProperties | undefined }) => {
  return (
    <p style={{...textStyles, ...style}}>{children}</p>
  )
}