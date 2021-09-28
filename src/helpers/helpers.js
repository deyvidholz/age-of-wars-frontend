import Vue from "vue";

Vue.prototype.formatMoney = (
  value,
  convertToInt = false,
  includeCurrencySymbol = true
) => {
  const options = {
    currency: "USD",
    maximumFractionDigits: convertToInt ? 0 : 2,
  };

  if (includeCurrencySymbol) {
    options.style = "currency";
  }

  return value.toLocaleString("en-US", options);
};

Vue.prototype.formatRanking = (value) => {
  value = value.toString();
  const pad = "000";
  return pad.substring(0, pad.length - value.length) + value;
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

Vue.prototype.getOpinionIcon = (value) => {
  if (value > 130) {
    return { color: "blue", icon: "mdi-heart" };
  } else if (value < -130) {
    return { color: "red", icon: "mdi-heart-broken" };
  } else {
    return { color: "yellow", icon: "mdi-heart-half-full" };
  }
};
