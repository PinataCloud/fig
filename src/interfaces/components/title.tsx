import {titleStyles} from "../ui";
import {CSSProperties} from "react";

//style as jsx css styles
export const Title = ({children, style}: { children: any, style?: CSSProperties | undefined;}) => {
  return (
      <p style={{...titleStyles, ...style}}>{children}</p>
  )
}