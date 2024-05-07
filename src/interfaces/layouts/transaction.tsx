import {Title, Container, Caption, Text} from "../components/";
import {Icon} from "../components/icon";
import {Chip} from "../components/chip";

interface TransactionProps {
  title: string;
  description: string;
  txDetails: {
    network: string;
    amount: number;
    currency: string;
    recipient: string;
  };
  chipText: string;
}

export const Transaction = ({ title, description, txDetails , chipText }: TransactionProps) => {
  return (
    <Container style={{alignItems: "flex-start", justifyContent: "space-between"}}>
      <div style={{display: "flex", alignItems: "flex-start", width: "100%", justifyContent: "space-between"}}>
        <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </div>
        <Chip>{chipText}</Chip>
      </div>
      <div style={{display: "flex", textAlign: "left", flexDirection: "column"}}>
        Network: {txDetails.network}
        Amount: {txDetails.amount} {txDetails.currency}
        Recipient: {txDetails.recipient}
      </div>
    </Container>
  )
}