export const imageOptionsUtils = async () => {
  const interSemiBoldFont = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-SemiBold.woff")
    .then((res) => res.arrayBuffer());

  const interFont = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff")
    .then((res) => res.arrayBuffer());

  return {
    imageOptions: {
      fonts: [
        {
          name: "Inter",
          data: interSemiBoldFont,
          weight: <600> 600,
        },
        {
          name: "Inter",
          data: interFont,
          weight: <400> 400,
        }
      ],
      width: 1200,
      height: 628,
    }
  }
}