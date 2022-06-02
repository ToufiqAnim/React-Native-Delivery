import { colors } from "../../Theme/Colors";
import { typography } from "../../Theme/typography";

const BASE = {
  fontFamily: typography.primary,

  color: colors.black,
};
/* const BASE_MEDIUM = {
  fontFamily: typography.primaryMedium,
  fontSize: 16,

  color: colors.black,
}; */
const BASE_SEMIBOLD = {
  fontFamily: typography.primarySemiBold,
  fontSize: 16,
  color: "white",
};
const PRIMARY_BOLD = {
  fontFamily: typography.primaryBold,
  color: colors.black,
};
const BOLD = {
  fontFamily: typography.bold,
  color: colors.black,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  primaryBold: PRIMARY_BOLD,

  h1: {
    ...BOLD,
    fontSize: 34,
  },
  h2: {
    ...PRIMARY_BOLD,
    fontSize: 32,
  },
  h3: {
    ...PRIMARY_BOLD,
    fontSize: 30,
  },
  h4: {
    ...PRIMARY_BOLD,
    fontSize: 22,
  },
  h5: {
    ...BASE_SEMIBOLD,
    fontSize: 15,
  },
  h6: {
    ...BASE,
    fontSize: 19,
  },
};
