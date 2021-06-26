
const colorNames = {
  blumine: "#186889",
  astral: "#2E86ABC4",
  tuna: "#3b3c47",
  aliceBlue: "#f0f9ff",
  trout: "#4d5061c1",
  ziggurat: "#BCD5E4",
  geyser: "#CFDde3c3",
  ebb: "rgba(255, 255, 255, 0.79)",
}


export const theme = {
  color: {
    primary: colorNames.ebb,
    secondary: colorNames.blumine,
    tertiary: colorNames.tuna,
  },
  backgroundColor: {
    body: colorNames.astral,
    fieldsetOverlay: colorNames.geyser,
    label: colorNames.ziggurat,
    field: colorNames.trout,
    button: colorNames.trout,
    boxClock: colorNames.aliceBlue
  },
  active: {
    button: colorNames.ebb
  },
  image: {
    url: 'https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png'
  },
  accent: {
    boxArrow: colorNames.tuna,
    arrow: colorNames.ebb,
    greyShadow: "rgba(47, 50, 50, 0.54)",
    darkShadow: "rgba(0, 0, 0, .5)"
  },
  breakpoint: {
    ipad: 768
  }
};