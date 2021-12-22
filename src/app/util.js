export const safeCopy = a => JSON.parse(JSON.stringify(a));

export function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

export const priceFormat = num => {
  num = num.toFixed(2) + "";
  num = num.replace(/\d(?=(\d{3})+\.)/g, "$&,");
  num = num.replace(/,/g, "#");
  num = num.replace(/\./g, ",");
  num = num.replace(/#/g, ".");
  return "$" + num;
};

export const getHighestResFormatURL = image => {
  try {
    const formats = image.data.attributes.formats;
    let format = formats.thumbnail;
    if (formats.large) format = formats.large;
    if (formats.medium) format = formats.medium;
    if (formats.small) format = formats.small;
    return process.env.STRAPI_URL + format.url;
  } catch (e) {
    console.log("Image error", e);
    return "/images/image-placeholder.jpg";
  }
};
