import { createFrames, Button } from "frames.js/cloudflare-workers";
import {imageOptionsUtils} from "./interfaces/utils";
import {LinkPreview} from "./interfaces/layouts";
import {Container, Text, Title, Caption} from "./interfaces/components";

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
        url="https://shorturl.at/tCDLN"
      />;
    case 2:
      return <LinkPreview
        title="LinkPreview N2"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://shorturl.at/tCDLN"
      />;
    case 3:
      return <LinkPreview
        title="LinkPreview N3"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://shorturl.at/tCDLN"
      />;
    default:
      return <LinkPreview
        title="LinkPreview N1"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://shorturl.at/tCDLN"
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
        textInput: "Interface No e.g. 1",
        buttons: [
          <Button action={"post"}>Preview Interface</Button>,
          <Button action={"post"}  target={{ query: { howto: true } }}>How to use?</Button>,
          <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Figma</Button>,
          <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Github</Button>,
        ],
      };
  }

  return {
    image: (
      <LinkPreview
        title="Frames Interfaces"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://shorturl.at/tCDLN"
      />
    ),
    imageOptions: { ...imageOptionsUtil.imageOptions },
    textInput: "Interface No e.g. 1",
    buttons: [
      <Button action={"post"}>Preview Interface</Button>,
      <Button action={"post"}  target={{ query: { howto: true } }}>How to use?</Button>,
      <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Figma</Button>,
      <Button action={"link"} target={"https://www.figma.com/community/file/1367670879509913267"}>Github</Button>,
    ],
  };
});

export default {
  fetch,
} satisfies ExportedHandler<Env>;
