import {Title, Container, Chip, Text} from "../components/";

interface TransactionProps {
  title: string;
  description: string;
  chipText: string;
  children: any;
}

export const Transaction = ({ children, title, description , chipText }: TransactionProps) => {
  return (
    <Container style={{alignItems: "flex-start", justifyContent: "space-between"}}>
      <div style={{display: "flex", alignItems: "flex-start", width: "100%", justifyContent: "space-between"}}>
        <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </div>
        <Chip>{chipText}</Chip>
      </div>
      <div style={{display: "flex", textAlign: "left"}}>
        {children}
      </div>
    </Container>
  )
}