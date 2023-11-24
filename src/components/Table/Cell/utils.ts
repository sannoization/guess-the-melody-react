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

export const buildTimeFormat = (time: number) => {
  const symbol = '0';
  const length = 2;
  return (new Array(length + 1).join(symbol) + time).slice(-length)
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