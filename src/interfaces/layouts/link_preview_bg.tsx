import {Title, Container, Caption, Text, BackgroundImage} from "../components/";

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