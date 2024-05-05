import { createFrames, Button } from "frames.js/cloudflare-workers";
import {LinkPreview} from "./interfaces/layouts/link_preview";
import {imageOptionsUtils} from "./interfaces/utils";

type Env = {
  /**
   * Taken from wrangler.toml#vars
   */
  MY_APP_LABEL: string;
};

const frames = createFrames<Env>();

const fetch = frames(async (ctx) => {
  const hasClicked = !!(ctx.message && ctx.searchParams.clicked);
  const imageOptionsUtil = await imageOptionsUtils();

  return {
    image: (
      <LinkPreview
        title="Frames Interfaces"
        description="Frame Interface Guidelines. Check out the Figma and Github links for more information."
        url="https://shorturl.at/tCDLN"
      />
    ),
    imageOptions: { ...imageOptionsUtil.imageOptions },
    buttons: !hasClicked
      ? [
          <Button action="post" target={{ query: { clicked: true } }}>
            Click Me
          </Button>,
        ]
      : [
          <Button action="post" target="/">
            Reset
          </Button>,
        ],
  };
});

export default {
  fetch,
} satisfies ExportedHandler<Env>;
