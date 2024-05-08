import {iconContainerStyles} from "../ui.ts";
import {icons} from "../icons";

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  collection?: "heroicons" | "lucide" | "radix-icons";
  style: any;
}

export const Icon = (props: IconProps) => {
  const {name, color, size, style} = props;
  const iconMap = icons[props.collection || "heroicons"];
  let text: string = iconMap[name as keyof typeof iconMap]

  if (color) {
    text = text.replace(/currentColor/g, encodeURIComponent(color))
  }

  return (
    <div style={{...iconContainerStyles, ...style}}>
      <div
        style={{
          display: "flex",
          backgroundImage: `url('data:image/svg+xml;utf8,${text}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: size || 88,
          height: size || 88,
        }}
      />
    </div>
  )
}