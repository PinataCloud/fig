import {containerStyles} from "../ui";
import {CSSProperties} from "react";

export const Container = ({children, style}: {children: any, style?: CSSProperties | undefined}) => {
  return (
    <div style={{...containerStyles, ...style}}>{children}</div>
  )
}