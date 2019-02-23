const colors = {
  white: "#fff",
  light: "#e8e8e8",
  gray: "#d9d9d9",
  blue: "#1890ff",
  darkblue: "#096dd9",
};

export default {
  colors,
  elColors: {
    background: colors.white,
    border: colors.gray,
    borderFocus: "#40a9ff",
    font: "rgba(0, 0, 0, 0.65)"
  },
  shadow: {
    default: "0 0 0 2px rgba(24, 144, 255, 0.2)",
    box: "0 2px 0 rgba(0, 0, 0, 0.045)",
    text: "0 -1px 0 rgba(0, 0, 0, 0.12)"
  },
  font: {
    size: {
      default: "14px"
    },
    weight: {
      default: 400
    }
  },
  radius: {
    default: '4px'
  }
};
