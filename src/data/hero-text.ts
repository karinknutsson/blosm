import type { HeroWord, HeroSentence } from "@/types/hero-sentence.interface";

const heroTextDataStart: HeroSentence = {
  words: [
    { text: "Find", moveX: 40, moveY: 0 } as HeroWord,
    { text: "your", moveX: 100, moveY: -10 } as HeroWord,
    { text: "hidden", moveX: -20, moveY: 6 } as HeroWord,
    { text: "treasures", moveX: 20, moveY: -6 } as HeroWord,
  ],
} as HeroSentence;

const heroTextDataEnd: HeroSentence = {
  words: [
    { text: "Let", moveX: 80, moveY: 0 } as HeroWord,
    { text: "your", moveX: -20, moveY: -10 } as HeroWord,
    { text: "style", moveX: 80, moveY: 0 } as HeroWord,
    { text: "Blosm", moveX: -10, moveY: 20 } as HeroWord,
  ],
} as HeroSentence;

export { heroTextDataStart, heroTextDataEnd };
