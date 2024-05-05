import {titleStyles} from "../ui.ts";

export const Title = ({children, style}: any) => {
  return (
      <p style={{...titleStyles, ...style}}>{children}</p>
  )
}