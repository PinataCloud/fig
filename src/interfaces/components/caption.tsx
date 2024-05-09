import {captionStyles} from "../ui";
import {CSSProperties} from "react";

export const Caption = ({children, style}: {children: any, style?: CSSProperties | undefined;}) => {
  return (
    <p style={{...captionStyles, ...style}}>{children}</p>
  )
}