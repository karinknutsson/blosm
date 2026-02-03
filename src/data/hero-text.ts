import type { HeroWord, HeroSentence } from "@/types/hero-sentence.interface";

const heroTextDataStart: HeroSentence = {
  words: [
    { text: "Find", moveX: "15%", moveY: "0" } as HeroWord,
    { text: "your", moveX: "30%", moveY: "-20%" } as HeroWord,
    { text: "hidden", moveX: "0", moveY: "5%" } as HeroWord,
    { text: "treasures", moveX: "5%", moveY: "-5%" } as HeroWord,
  ],
} as HeroSentence;

const heroTextDataEnd: HeroSentence = {
  words: [
    { text: "Let", moveX: "20%", moveY: "0" } as HeroWord,
    { text: "your", moveX: "-5%", moveY: "-10%" } as HeroWord,
    { text: "style", moveX: "20%", moveY: "-5%" } as HeroWord,
    { text: "Blosm", moveX: "-10%", moveY: "5%" } as HeroWord,
  ],
} as HeroSentence;

export { heroTextDataStart, heroTextDataEnd };
