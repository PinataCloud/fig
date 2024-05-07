import {Title, Container, Caption, Text} from "../components/";

interface LinkPreviewProps {
  title: string;
  description: string;
  caption: string;
}

export const LinkPreview = ({ title, description, caption }: LinkPreviewProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Caption>{caption}</Caption>
    </Container>
  )
}