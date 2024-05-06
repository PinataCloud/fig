import {Title, Container, Caption, Text} from "../components/";

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