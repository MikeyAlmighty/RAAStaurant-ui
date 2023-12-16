import { BUTTON_TYPE } from "@/utils/constants.ts";
import { COLOR } from "@/utils/theme.ts";

export const ButtonColorMapper = {
  [BUTTON_TYPE.PRIMARY]: {
    backgroundColor: COLOR[BUTTON_TYPE.PRIMARY],
    textColor: COLOR.white,
  },
  [BUTTON_TYPE.SECONDARY]: {
    backgroundColor: COLOR[BUTTON_TYPE.SECONDARY],
    textColor: COLOR.black,
  },
  [BUTTON_TYPE.TERTIARY]: {
    backgroundColor: COLOR[BUTTON_TYPE.TERTIARY],
    textColor: COLOR.black,
  },
};
