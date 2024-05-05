import {containerStyles} from "../ui.ts";
import {Title} from "../components/title.tsx";
import {Text} from "../components/text.tsx";
import {Caption} from "../components/caption.tsx";
import {Container} from "../components/container.tsx";

interface LinkPreviewProps {
  title: string;
  description: string;
  url: string;
}

export const LinkPreview = ({ title, description, url }: LinkPreviewProps) => {
  return (
    <Container style={{alignItems: "flex-start", textAlign: "left", justifyContent: "flex-end"}}>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Caption>{url}</Caption>
    </Container>
  )
}