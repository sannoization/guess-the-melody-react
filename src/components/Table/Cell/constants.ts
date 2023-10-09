export enum PICTURES {
  GOOGLE_TRANSLATE = 'GOOGLE_TRANSLATE',
  EMOJI = 'EMOJI',
  DEFAULT = 'DEFAULT',
  NONE = 'NONE'
}

export enum COLORS {
  RED = 'red',
  BLACK = 'black'
}

export const compareType = (type: string | undefined) => {
  switch (type) {
    case PICTURES.GOOGLE_TRANSLATE:
      return PICTURES.GOOGLE_TRANSLATE;
    case PICTURES.EMOJI:
      return PICTURES.EMOJI;
    case PICTURES.DEFAULT:
      return PICTURES.DEFAULT;
    default:
      return PICTURES.NONE;
  }
}