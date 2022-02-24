import colors from "./colors";

export const standardFontSize = 20;

const defaultStyles = {
  colors,

  formInputField: {
    border: 0,
    borderRadius: 5,
    fontSize: standardFontSize,
    padding: 8,
    width: "90%",
  },

  // standardFont: {
  //   fontSize: standardFontSize,
  // },

  text: {
    color: colors.customDarkGray,
    fontSize: standardFontSize,
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  },
};

export default defaultStyles;
