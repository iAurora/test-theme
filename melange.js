// melange.js — minimal Blink theme (Melange)

const melangeLight = {
  base: "#F1F1F1",
  text: "#54433A",
  cursor: "#54433A",
  palette: [
    "#E9E1DB", // 0
    "#C77B8B", // 1
    "#6E9B72", // 2
    "#BC5C00", // 3
    "#7892BD", // 4
    "#BE79BB", // 5
    "#739797", // 6
    "#7D6658", // 7
    "#A98A78", // 8
    "#BF0021", // 9
    "#3A684A", // 10
    "#A06D00", // 11
    "#465AA4", // 12
    "#904180", // 13
    "#3D6568", // 14
    "#54433A", // 15
  ],
};

const melangeDark = {
  base: "#292522",
  text: "#ECE1D7",
  cursor: "#ECE1D7",
  palette: [
    "#34302C", // 0
    "#BD8183", // 1
    "#78997A", // 2
    "#E49B5D", // 3
    "#7F91B2", // 4
    "#B380B0", // 5
    "#7B9695", // 6
    "#C1A78E", // 7
    "#867462", // 8
    "#D47766", // 9
    "#85B695", // 10
    "#EBC06D", // 11
    "#A3A9CE", // 12
    "#CF9BC2", // 13
    "#89B3B6", // 14
    "#ECE1D7", // 15
  ],
};

const setTheme = ({ matches = false } = {}) => {
  const palette = matches ? melangeDark : melangeLight;
  t.prefs_.set("cursor-color", palette.cursor);
  t.prefs_.set("foreground-color", palette.text);
  t.prefs_.set("background-color", palette.base);
  t.prefs_.set("color-palette-overrides", palette.palette);
};

const mq = window.matchMedia("(prefers-color-scheme: dark)");

// modern -> fallback for older environments
if (typeof mq.addEventListener === "function") {
  mq.addEventListener("change", setTheme);
} else if (typeof mq.addListener === "function") {
  mq.addListener(setTheme);
}

setTheme({ matches: mq.matches });
