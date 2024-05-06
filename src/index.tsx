import { createFrames, Button } from "frames.js/cloudflare-workers";
import {imageOptionsUtils} from "./interfaces/utils";
import {LinkPreview} from "./interfaces/layouts";
import {LinkPreviewFavico} from "./interfaces/layouts/link_preview_favico";

type Env = {
  /**
   * Taken from wrangler.toml#vars
   */
  MY_APP_LABEL: string;
};

const frames = createFrames<Env>();

const getInterface = (interfaceNo: number) => {
  switch (interfaceNo) {
    case 1:
      return <LinkPreview
        title="LinkPreview N1"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://github.com/PinataCloud/fig"
      />;
    case 2:
      return <LinkPreviewFavico
        title="Link title goes here"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://github.com/PinataCloud/fig"
        icon={{name: "academic-cap", size: 80, color: "white"}}
      />;
    default:
      return <LinkPreview
        title="Only two interfaces available"
        description="The rest of the layouts will be added this week."
        url="https://github.com/PinataCloud/fig"
      />;
  }
}

const fetch = frames(async (ctx) => {
  const howTo = !!(ctx.message && ctx.searchParams.howto);
  const imageOptionsUtil = await imageOptionsUtils();

  if (howTo) {
    return {
      image: 'https://assets.pinatadrops.com/fig-instructions.png',
      buttons: [
        <Button action={"post"}>Back</Button>,
      ],
    };
  }


  if (ctx.message?.inputText) {
    const interfaceNo = parseInt(ctx.message.inputText);
      return {
        image: getInterface(interfaceNo),
        imageOptions: { ...imageOptionsUtil.imageOptions },
        textInput: "Interface Nº e.g. 1",
        buttons: [
          <Button action={"post"}>Preview Nº</Button>,
          <Button action={"post"}  target={{ query: { howto: true } }}>How to use?</Button>,
          <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Figma</Button>,
          <Button action={"link"} target={"https://github.com/PinataCloud/fig"}>Github</Button>,
        ],
      };
  }

  return {
    image: (
      <LinkPreview
        title="Frame Interface Guidelines"
        description="Check out the Figma and Github links for more information. Enter a Nº below to preview the corresponding interface"
        url="https://github.com/PinataCloud/fig"
      />
    ),
    imageOptions: { ...imageOptionsUtil.imageOptions },
    textInput: "Interface Nº e.g. 1",
    buttons: [
      <Button action={"post"}>Preview Nº</Button>,
      <Button action={"post"}  target={{ query: { howto: true } }}>How to use?</Button>,
      <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Figma</Button>,
      <Button action={"link"} target={"https://github.com/PinataCloud/fig"}>Github</Button>,
    ],
  };
});

export default {
  fetch,
} satisfies ExportedHandler<Env>;
