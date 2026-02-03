export interface HeroWord {
  text: string;
  moveX: number;
  moveY: number;
}

export interface HeroSentence {
  words: HeroWord[];
}
