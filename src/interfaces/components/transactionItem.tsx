import {Caption} from "./caption";

export const TransactionItem = ({children, style, title}: any) => {
  return (
    <div style={{display: "flex", flexDirection: "column", paddingRight: 42, ...style}}>
      <Caption style={{fontSize: 32}}>{title}</Caption>
      <p style={{display: "flex", alignItems: "center", gap: 16}}>
        {children}
      </p>
    </div>
  )
}