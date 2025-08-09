// melange.js — Blink.sh theme for iPadOS
// Dynamic light/dark adaptation based on system preference
// Based on Melange.nvim (Ghostty adaptation)

const melangeDark = {
  background: "#292522",
  foreground: "#ECE1D7",
  cursor: "#ECE1D7",
  selectionBg: "#403A36",
  selectionFg: "#ECE1D7",
  palette: [
    "#34302C", // black
    "#BD8183", // red
    "#78997A", // green
    "#E49B5D", // yellow
    "#7F91B2", // blue
    "#B380B0", // magenta
    "#7B9695", // cyan
    "#C1A78E", // white
    "#867462", // bright black
    "#D47766", // bright red
    "#85B695", // bright green
    "#EBC06D", // bright yellow
    "#A3A9CE", // bright blue
    "#CF9BC2", // bright magenta
    "#89B3B6", // bright cyan
    "#ECE1D7", // bright white
  ],
};

const melangeLight = {
  background: "#F1F1F1",
  foreground: "#54433A",
  cursor: "#54433A",
  selectionBg: "#D9D3CE",
  selectionFg: "#54433A",
  palette: [
    "#E9E1DB", // black
    "#C77B8B", // red
    "#6E9B72", // green
    "#BC5C00", // yellow
    "#7892BD", // blue
    "#BE79BB", // magenta
    "#739797", // cyan
    "#7D6658", // white
    "#A98A78", // bright black
    "#BF0021", // bright red
    "#3A684A", // bright green
    "#A06D00", // bright yellow
    "#465AA4", // bright blue
    "#904180", // bright magenta
    "#3D6568", // bright cyan
    "#54433A", // bright white
  ],
};

const applyTheme = (palette) => {
  t.prefs_.set("background-color", palette.background);
  t.prefs_.set("foreground-color", palette.foreground);
  t.prefs_.set("cursor-color", palette.cursor);
  t.prefs_.set("selection-background-color", palette.selectionBg);
  t.prefs_.set("selection-foreground-color", palette.selectionFg);
  t.prefs_.set("color-palette-overrides", palette.palette);
};

const updateTheme = ({ matches }) => {
  if (matches) {
    applyTheme(melangeDark);
  } else {
    applyTheme(melangeLight);
  }
};

const mq = window.matchMedia("(prefers-color-scheme: dark)");
mq.addEventListener("change", updateTheme);
updateTheme({ matches: mq.matches });
