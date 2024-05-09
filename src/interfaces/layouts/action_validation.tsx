import {Title, Container, Text, Icon} from "../components/";
import {colors} from "../ui";

interface LinkPreviewProps {
  title?: string;
  description: string;
  type: "success" | "error" | "warning" | "info";
}

const getTitleByType = (type: string) => {
  switch (type) {
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    case "info":
      return "Info";
    default:
      return "Unknown!";
  }
}

const getBgColorByType = (type: string) => {
  //a dark version of each color
  switch (type) {
    case "success":
      return colors.dark.green400;
    case "error":
      return colors.dark.red300;
    case "warning":
      return colors.dark.amber300;
    case "info":
      return colors.dark.blue300;
    default:
      return "darkgray";
  }
}

const getColorByType = (type: string) => {
  switch (type) {
    case "success":
      return colors.dark.green900;
    case "error":
      return colors.dark.red600;
    case "warning":
      return colors.dark.amber600;
    case "info":
      return colors.dark.blue900;
    default:
      return "gray";
  }
}

const getIconByType = (type: string) => {
  switch (type) {
    case "success":
      return "check";
    case "error":
      return "x-mark";
    case "warning":
      return "exclamation-triangle";
    case "info":
      return "information-circle";
    default:
      return "alert-octagon";
  }
}

export const ActionValidation = ({ title, description, type }: LinkPreviewProps) => {
  return (
    <Container style={{justifyContent: "center", alignItems: "center"}}>
      <Icon
        name={getIconByType(type)}
        size={80}
        color={getColorByType(type)}
        style={{width: 140, height: 140, borderRadius: "50%", backgroundColor: getBgColorByType(type)}}
      />
      <Title>{title || getTitleByType(type)}</Title>
      <Text>{description}</Text>
    </Container>
  )
}