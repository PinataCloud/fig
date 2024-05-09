import { createFrames, Button } from "frames.js/cloudflare-workers";
import {imageOptionsUtils} from "./interfaces/utils";
import {LinkPreview, LinkPreviewFavico, LinkPreviewBg, Splash, About, Transaction, ActionValidation} from "./interfaces/layouts";
import {Container, Text, Title, TransactionItem} from "./interfaces/components";

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
        chipText="Transaction">
        <TransactionItem style={{borderRight: "1px solid white"}} title={"Network"}>
          <i style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "#878787"}}/>
          Ethereum
        </TransactionItem>
        <TransactionItem style={{borderRight: "1px solid white", marginLeft: 42}} title={"Amount"}>
           0.0015 ETH
        </TransactionItem>
        <TransactionItem style={{marginLeft: 42}} title={"Recipient"}>
          0x1234...5678
        </TransactionItem>
      </Transaction>;
    case 6:
      return <ActionValidation description={'Your payment succeeded'} type={'success'} />
    case 7:
      return <ActionValidation description={"Not enough gas for transaction"} type={'error'} />
    case 8:
      return <ActionValidation description={"Network busy, this may take a while"} type={'warning'} />
    case 9:
      return <ActionValidation description={"You can also pay with $DEGEN"} type={'info'} />
    case 10:
      return <About description={"An interface to introduce a concept"} title={"About Interface"} icon={{name: 'question-mark-circle'}} />
    case 11:
      return <Container style={{justifyContent: "center", alignItems: "center"}}>
        <Title>Generic Cover</Title>
        <Text style={{textAlign: "center"}}>Cover generated with just primitive components and a couple of centering styles</Text>
      </Container>
    default:
      return <LinkPreview
        title="Only a few interfaces available yet"
        description="The rest of the layouts will be added this week."
        caption="https://github.com/PinataCloud/fig"
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
        description="Vanilla implementation of FIG with regular css and jsx. Works with framesjs and frog. Up to 11 available."
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
