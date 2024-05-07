import { createFrames, Button } from "frames.js/cloudflare-workers";
import {imageOptionsUtils} from "./interfaces/utils";
import {LinkPreview, LinkPreviewFavico, LinkPreviewBg} from "./interfaces/layouts";
import {Splash} from "./interfaces/layouts/splash";
import {Transaction} from "./interfaces/layouts/transaction";

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
        title="LinkPreview"
        description="The most basic layout. Description goes here."
        caption="https://github.com/PinataCloud/fig"
      />;
    case 2:
      return <LinkPreviewFavico
        title="LinkPreviewFavico"
        description="The basic layout with an icon to catch the eye. Description goes here."
        caption="https://github.com/PinataCloud/fig"
        icon={{name: "academic-cap", size: 80, color: "white"}}
      />;
    case 3:
      return <LinkPreviewBg
        title="LinkPreviewBg"
        description="The basic layout with a Background Image. Description goes here."
        caption="https://github.com/PinataCloud/fig"
        backgroundUrl={"https://assets.pinatadrops.com/fig_bg.png"}
      />;
    case 4:
      return <Splash
        title="Splash"
        description="Favicon layout plus a chip with extra information about the frame action."
        icon={{name: "academic-cap", size: 80, color: "white"}}
        chipText="Link to App"
      />;
    case 5:
      return <Transaction
        title="Transaction"
        description="Favicon layout plus a chip with extra information about the frame action."
        txDetails={{network: "Ethereum", amount: 0.1, currency: "ETH", recipient: "0x1234567890"}}
        chipText="Transaction"
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
        title="Frame Interface Guidelines (FIG)"
        description="Vanilla implementation of FIG with regular css and jsx. Works with framesjs and frog"
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
