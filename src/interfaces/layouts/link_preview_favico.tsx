import {Title, Container, Caption, Text} from "../components/";
import {Icon} from "../components/icon";

interface LinkPreviewProps {
  title: string;
  description: string;
  caption: string;
  icon: {
    name: string;
    size?: number;
    color?: string;
  };
}

export const LinkPreviewFavico = ({ title, description, caption, icon }: LinkPreviewProps) => {
  return (
    <Container style={{alignItems: "flex-start", justifyContent: "space-between"}}>
      <Icon {...icon} />
      <div style={{display: "flex", textAlign: "left", flexDirection: "column"}}>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Caption>{caption}</Caption>
      </div>
    </Container>
  )
}