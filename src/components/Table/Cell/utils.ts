export enum PICTURES {
  GOOGLE_TRANSLATE = 'GOOGLE_TRANSLATE',
  EMOJI = 'EMOJI',
  SOUND_ICON = 'SOUND_ICON',
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
    case PICTURES.SOUND_ICON:
      return PICTURES.SOUND_ICON;
    default:
      return PICTURES.NONE;
  }
}