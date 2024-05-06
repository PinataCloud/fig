import {Title, Container, Caption, Text} from "../components/";

interface LinkPreviewProps {
  title: string;
  description: string;
  url: string;
}

export const LinkPreview = ({ title, description, url }: LinkPreviewProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Caption>{url}</Caption>
    </Container>
  )
}