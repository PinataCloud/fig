import {Title, Container, Caption, Text} from "../components/";
import {BackgroundImage} from "../components/backgroundImage";

interface LinkPreviewProps {
  title: string;
  description: string;
  caption: string;
  backgroundUrl: string;
}

export const LinkPreviewBg = ({ title, description, caption, backgroundUrl }: LinkPreviewProps) => {
  return (
    <Container>
      <BackgroundImage backgroundUrl={backgroundUrl} />
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Caption>{caption}</Caption>
    </Container>
  )
}