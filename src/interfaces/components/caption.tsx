import {captionStyles} from "../ui.ts";

export const Caption = ({children}: any) => {
  return (
    <p style={captionStyles}>{children}</p>
  )
}