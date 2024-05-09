import {chipStyles, textStyles} from "../ui";
import {CSSProperties} from "react";

export const Chip = ({children, style}: {children: any, style?: CSSProperties | undefined;}) => {
  return (
      <p style={{
        ...textStyles,
        ...chipStyles,
        ...style
      }}>{children}</p>
  )
}