import {Caption} from "./caption";
import {CSSProperties} from "react";

interface TransactionItemProps {
  children: any;
  style?: CSSProperties | undefined;
  title: string;
}

export const TransactionItem = ({children, style, title}: TransactionItemProps) => {
  return (
    <div style={{display: "flex", flexDirection: "column", paddingRight: 42, ...style}}>
      <Caption style={{fontSize: 32}}>{title}</Caption>
      <p style={{display: "flex", alignItems: "center", gap: 16}}>
        {children}
      </p>
    </div>
  )
}