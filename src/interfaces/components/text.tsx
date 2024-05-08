import {textStyles} from "../ui.ts";

export const Text = ({children, style}: any) => {
  return (
    <p style={{...textStyles, ...style}}>{children}</p>
  )
}