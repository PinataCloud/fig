import {containerStyles} from "../ui.ts";

export const Container = ({children, style}: any) => {
  return (
    <div style={{...containerStyles, ...style}}>{children}</div>
  )
}