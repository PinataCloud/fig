import {containerStyles} from "../ui.ts";

export const Container = ({children, style}: any) => {
  return (
    <p style={{...containerStyles, ...style}}>{children}</p>
  )
}