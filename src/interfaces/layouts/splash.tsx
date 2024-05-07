import {Title, Container, Caption, Text} from "../components/";
import {Icon} from "../components/icon";
import {Chip} from "../components/chip";

interface LinkPreviewProps {
  title: string;
  description: string;
  url: string;
  icon: {
    name: string;
    size?: number;
    color?: string;
  };
  chipText: string;
}

export const Splash = ({ title, description, url, icon, chipText }: LinkPreviewProps) => {
  return (
    <Container style={{alignItems: "flex-start", justifyContent: "space-between"}}>
      <div style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between"}}>
        <Icon {...icon} />
        <Chip>{chipText}</Chip>
      </div>
      <div style={{display: "flex", textAlign: "left", flexDirection: "column"}}>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Caption>{url}</Caption>
      </div>
    </Container>
  )
}