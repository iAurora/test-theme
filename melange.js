// Theme for Blink.sh
// Based on Melange.nvim
// Follows system light/dark preference automatically

const melangeLight = {
  base: "#F1F1F1", // background
  text: "#54433A", // foreground
  cursor: "#54433A", // cursor color
  // ANSI 16-color palette
  palette: [
    "#E9E1DB", // 0: black
    "#C77B8B", // 1: red
    "#6E9B72", // 2: green
    "#BC5C00", // 3: yellow
    "#7892BD", // 4: blue
    "#BE79BB", // 5: magenta
    "#739797", // 6: cyan
    "#7D6658", // 7: white
    "#A98A78", // 8: bright black (grey)
    "#BF0021", // 9: bright red
    "#3A684A", // 10: bright green
    "#A06D00", // 11: bright yellow
    "#465AA4", // 12: bright blue
    "#904180", // 13: bright magenta
    "#3D6568", // 14: bright cyan
    "#54433A", // 15: bright white
  ],
};

const melangeDark = {
  base: "#292522", // background
  text: "#ECE1D7", // foreground
  cursor: "#ECE1D7", // cursor color
  // ANSI 16-color palette
  palette: [
    "#34302C", // 0: black
    "#BD8183", // 1: red
    "#78997A", // 2: green
    "#E49B5D", // 3: yellow
    "#7F91B2", // 4: blue
    "#B380B0", // 5: magenta
    "#7B9695", // 6: cyan
    "#C1A78E", // 7: white
    "#867462", // 8: bright black (grey)
    "#D47766", // 9: bright red
    "#85B695", // 10: bright green
    "#EBC06D", // 11: bright yellow
    "#A3A9CE", // 12: bright blue
    "#CF9BC2", // 13: bright magenta
    "#89B3B6", // 14: bright cyan
    "#ECE1D7", // 15: bright white
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
mq.addEventListener("change", setTheme);
setTheme({ matches: mq.matches });
