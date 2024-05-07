import {imageOptionsUtils} from "./interfaces/utils";
import {LinkPreview, LinkPreviewFavico, LinkPreviewBg} from "./interfaces/layouts";
import { createFrames, Button } from 'frames.js/hono';
import { Hono } from 'hono';
import { serve } from "@hono/node-server";

type Env = {
  /**
   * Taken from wrangler.toml#vars
   */
  MY_APP_LABEL: string;
};

const app = new Hono();
const frames = createFrames<Env>();

const getInterface = (interfaceNo: number) => {
  switch (interfaceNo) {
    case 1:
      return <LinkPreview
        title="LinkPreview"
        description="The most basic layout. Description goes here."
        url="https://github.com/PinataCloud/fig"
      />;
    case 2:
      return <LinkPreviewFavico
        title="LinkPreviewFavico"
        description="The basic layout with an icon to catch the eye. Description goes here."
        url="https://github.com/PinataCloud/fig"
        icon={{name: "academic-cap", size: 80, color: "white"}}
      />;
    case 3:
      return <LinkPreviewBg
        title="LinkPreviewBg"
        description="The basic layout with a Background Image. Description goes here."
        url="https://github.com/PinataCloud/fig"
        backgroundUrl={"https://assets.pinatadrops.com/fig_bg.png"}
      />;
    default:
      return <LinkPreview
        title="Only two interfaces available"
        description="The rest of the layouts will be added this week."
        url="https://github.com/PinataCloud/fig"
      />;
  }
}

const handleRequest = frames(async (ctx) => {
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

app.get('/', handleRequest);
app.post('/', handleRequest);

// expose app for `@hono/vite-dev-server`
export default app;

if (process.env.NODE_ENV === 'production') {
  serve({ ...app, port: 3000 }, info => {
    console.log(`Server running on http://localhost:${info.port}`);
  })
}
