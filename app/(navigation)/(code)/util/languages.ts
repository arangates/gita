export type Language = {
  name: string;
  src: () => Promise<any>;
};

export const LANGUAGES: { [index: string]: Language } = {
  plaintext: {
    name: "Plaintext",
    src: () => import("shiki/langs/javascript.mjs"),
  },
};
