export const imageOptionsUtils = async () => {
  const notoSemiBoldFont = await fetch("https://fonts.cdnfonts.com/s/15794/NotoSans-Bold.woff")
    .then((res) => res.arrayBuffer());

  const notoFont = await fetch("https://fonts.cdnfonts.com/s/15794/NotoSans-Regular.woff")
    .then((res) => res.arrayBuffer());

  return {
    imageOptions: {
      fonts: [
        {
          name: "Noto Sans",
          data: notoSemiBoldFont,
          weight: <600> 600,
        },
        {
          name: "Noto Sans",
          data: notoFont,
          weight: <400> 400,
        }
      ]
    }
  }
}