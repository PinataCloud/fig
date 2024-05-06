import {backgroundImgStyles} from "../ui.ts";

export const BackgroundImage = ({backgroundUrl}: any) => {
  return (
    <div style={{
      ...backgroundImgStyles,
      backgroundImage: `url(${backgroundUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} />
  )
}