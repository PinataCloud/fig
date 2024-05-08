import {captionStyles} from "../ui.ts";

export const Caption = ({children, style}: any) => {
  return (
    <p style={{...captionStyles, ...style}}>{children}</p>
  )
}