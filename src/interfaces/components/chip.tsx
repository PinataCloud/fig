import {chipStyles, textStyles} from "../ui.ts";

export const Chip = ({children, style}: any) => {
  return (
      <p style={{
        ...textStyles,
        ...chipStyles,
        ...style
      }}>{children}</p>
  )
}