import { COLOR_TYPE } from "@/utils/constants.ts";
import { COLOR } from "@/utils/theme.ts";

export const ButtonColorMapper = {
  [COLOR_TYPE.PRIMARY]: {
    backgroundColor: COLOR[COLOR_TYPE.PRIMARY],
    textColor: COLOR.white,
  },
  [COLOR_TYPE.SECONDARY]: {
    backgroundColor: COLOR[COLOR_TYPE.SECONDARY],
    textColor: COLOR.black,
  },
  [COLOR_TYPE.TERTIARY]: {
    backgroundColor: COLOR[COLOR_TYPE.TERTIARY],
    textColor: COLOR.black,
  },
};
