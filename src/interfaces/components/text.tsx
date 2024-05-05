import {textStyles} from "../ui.ts";

export const Text = ({children}: any) => {
  return (
    <p style={textStyles}>{children}</p>
  )
}