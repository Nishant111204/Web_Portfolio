declare module "gsap-trial/SplitText" {
  export interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];

    constructor(
      target: string | Element | Element[] | NodeListOf<Element> | string[],
      options?: SplitTextOptions
    );

    revert(): void;
  }
}
