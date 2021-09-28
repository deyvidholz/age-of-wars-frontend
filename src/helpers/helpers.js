import Vue from "vue";

Vue.prototype.formatMoney = (value, convertToInt = false) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: convertToInt ? 0 : 2,
  });
};

Vue.prototype.getOpinionColor = (value) => {
  if (value > 170) {
    return "font-weight-bold blue--text";
  } else if (value > 100) {
    return "blue--text text--lighten-2";
  } else if (value < -170) {
    return "font-weight-bold  red--text";
  } else if (value < -50) {
    return "red--text text--lighten-1";
  } else {
    return "yellow--text";
  }
};
