import {buildTimeFormat, compareType, PICTURES} from "../components/Table/Cell/utils";
import SOUND_ICON from "../icons/components/SOUND_ICON";


test("func test",() => {
  const types = {
    google: "GOOGLE_TRANSLATE",
    emoji: "EMOJI",
    sound: "SOUND_ICON",
    none: "NONE"
  };

  const result1 = compareType(types.google);
  expect(result1).toEqual(PICTURES.GOOGLE_TRANSLATE);

  const result2 = compareType(types.emoji);
  expect(result2).toEqual(PICTURES.EMOJI);

  const result3 = compareType(types.sound);
  expect(result3).toEqual(PICTURES.SOUND_ICON);

  const result4 = compareType(types.none);
  expect(result4).toEqual(PICTURES.NONE);

})

test("build time format", () => {
  const minutes = Math.floor(120 / 60);
  const seconds = Math.floor(5 - minutes * 60);
  const result = buildTimeFormat(minutes) + ':' + buildTimeFormat(seconds);

  expect(result).toEqual('02:15')
})