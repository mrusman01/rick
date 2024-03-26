import {
  coin,
  decenterlizeImg,
  dexTool,
  logo,
  metamask,
  pancake,
  safepay,
  trustwallet,
  verifyIcon,
  walletconnect,
} from "../../public/assets";

type HeaderLinksArray = Array<string>;

export const headerLinks: HeaderLinksArray = [
  "Whitepaper",
  "How to buy ?",
  "Team",
  "Announcement",
  "Audit",
];

type Tokens = Array<any>;
export const tokensArray: Tokens = [
  coin,
  metamask,
  pancake,
  trustwallet,
  safepay,
  walletconnect,
  dexTool,
];

interface Card {
  title: string;
  description: string;
}
export const DecenterlizedCards: Card[] = [
  {
    title: "RICK DAO",
    description:
      "Gain voting power by acquiring $Rick, participate in proposals, and freely choose the future of the token along with the entire community.",
  },
  {
    title: "AI INTEGRATION",
    description:
      "We work with multiple artificial intelligence tools that we will integrate into the project. AI will bring decentralization and efficiency.",
  },
  {
    title: "DEFI PLATAFORM",
    description:
      "All DAO participants will have the option to receive rewards and profits on our decentralized finance platform.",
  },
];
