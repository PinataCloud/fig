import {Title, Container, Text, Icon} from "../components/";

interface LinkPreviewProps {
  title?: string;
  description: string;
  icon: {
    name: string;
    size?: number;
    color?: string;
  };
}

export const About = ({ title, description, icon }: LinkPreviewProps) => {
  return (
    <Container style={{justifyContent: "center", alignItems: "center"}}>
      <Icon {...icon}/>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </Container>
  )
}