/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");
const colors = Object.fromEntries(
  [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ].map((x) => [x, defaultColors[x]])
);

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}

const twHsl = JSON.parse(
  JSON.stringify(colors).replace(/"(#[0-9a-fA-F]+)"/g, (_, hex) =>
    JSON.stringify(hexToHSL(hex))
  )
);

module.exports = {
  content: ["./app/**/*.{html,js,mjs}"],
  theme: {
    fontSize: {
      em: "1em",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      lightness: defaultTheme.opacity,
      chroma: defaultTheme.opacity,
      hue: {
        blueish: 222,
      },
      alpha: defaultTheme.opacity,
      mute: defaultTheme.opacity,
      colors: {
        inherit: "inherit",
        // Custom Tokens
        fg: "var(--fg)",
        canvas: "var(--canvas)",
        act: "var(--act)",
        // Semantic Tokens
        mute: "var(--mute)",
        link: "var(--link)",
        main: "var(--main)",
        alt: "var(--alt)",
        pop: "var(--pop)",
        // System Colors
        ActiveText: "ActiveText", // Text of active links
        ButtonBorder: "ButtonBorder", // Base border color of controls
        ButtonFace: "ButtonFace", // Background color of controls
        ButtonText: "ButtonText", // Foreground color of controls
        Canvas: "Canvas", // Background of application content or documents
        CanvasText: "CanvasText", // Foreground color in application content or documents
        Field: "Field", // Background of input fields
        FieldText: "FieldText", // Text in input fields
        GrayText: "GrayText", // Foreground color for disabled items (e.g. a disabled control)
        Highlight: "Highlight", // Background of selected items
        HighlightText: "HighlightText", // Foreground color of selected items
        LinkText: "LinkText", // Text of non-active, non-visited links
        Mark: "Mark", // Background of text that has been specially marked (such as by the HTML mark element)
        MarkText: "MarkText", // Text that has been specially marked (such as by the HTML mark element)
        VisitedText: "VisitedText", // Text of visited links
        // Brands
        SeatGeek: "#ff5b49",
      },
      spacing: {
        em: "1em",
        edge: "clamp(1rem, 3vw, 3rem)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),

    require("tailwindcss/plugin")(function ({
      matchUtilities,
      addBase,
      addComponents,
      addVariant,
      theme,
    }) {
      addComponents({
        ".box": {
          padding: "calc(1em - 0.5rem) calc(2em - 1rem)",
          width: "max-content",
          "border-radius": "calc(0.5em - 0.25rem)",
        },
      });
      addVariant("int", "&:is(*:focus-visible,*:focus-within,*:hover)");
      addVariant(
        "group-int",
        ".group:is(*:focus-visible,*:focus-within,*:hover) &"
      );
      const utilPropCtx = [
        // background
        ["canvas", "--canvas", "canvas"],
        ["bg", "background-color", "canvas"],
        ["from", "--tw-gradient-from", "canvas"],
        ["via", "--tw-gradient-via", "canvas"],
        ["to", "--tw-gradient-to", "canvas"],
        ["fill", "fill", "canvas"],
        ["ring-offset", "--tw-ring-offset-color", "canvas"],
        // foreground
        ["fg", "--fg", "fg"],
        ["text", "color", "fg"],
        ["text-decoration", "text-decoration-color", "fg"],
        ["placeholder-color", "--placeholder-color", "fg"],
        ["caret", "caret-color", "fg"],
        ["border", "border-color", "fg"],
        ["stroke", "stroke", "fg"],
        ["ring-offset-shadow-color", "--tw-ring-offset-shadow-color", "fg"],
        ["ring-shadow-color", "--tw-ring-shadow-color", "fg"],
        ["shadow-color", "--tw-shadow-color", "fg"],
        // action
        ["act", "--act", "act"],
        ["accent", "accent-color", "act"],
        ["outline", "outline-color", "act"],
        ["ring", "--tw-ring-color", "act"],
      ];
      const foundation = (util, prop, ctx) =>
        `hsl( 
                var(--${util}-h, var(--${ctx}-h))
          calc( var(--${util}-c, var(--${ctx}-c)) * 100% ) 
          calc( var(--${util}-l, var(--${ctx}-l)) * 100% ) 
        / calc( var(--${util}-a, var(--${ctx}-a)) * 100% ) 
        )`.replace(/\s/g, "");

      // root color
      addBase({
        ":root": {
          "--root-h": "222",
          "--link-h": "222",
          // tailwind overrides
          "--tw-ring-offset-color": "var(--tw-ring-offset-color)",
          "--tw-ring-color": "var(--tw-ring-color)",
          "--tw-ring-offset-shadow": "0 0 var(--tw-ring-offset-shadow-color)",
          "--tw-ring-shadow": "0 0 var(--tw-ring-shadow-color)",
          "--tw-shadow": "0 0 var(--tw-shadow-color)",
          "--tw-shadow-colored": "0 0 var(--tw-shadow-color)",
          "--tw-gradient-stops":
            "var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent)",

          // canvas
          "--canvas-l": "1",
          "--canvas-c": "0",
          "--canvas-h": "var(--root-h)",
          "--canvas-a": "1",
          // foreground
          "--fg-l": "0",
          "--fg-c": "0",
          "--fg-h": "var(--root-h)",
          "--fg-a": "1",
          // act
          "--act-l": "0.5",
          "--act-c": "1",
          "--act-h": "var(--root-h)",
          "--act-a": "1",
          // dark
          "@media (prefers-color-scheme: dark)": {
            "--canvas-l": "0",
            "--fg-l": "1",
          },
          ...utilPropCtx.reduce(
            (acc, [util, prop, ctx]) => ({
              ...acc,
              [prop]: foundation(util, prop, ctx),
            }),
            {}
          ),
        },
      });
      utilPropCtx.map(([util, prop, ctx]) => {
        // Allows Defining Default Tailwind Colors as HSL editable
        matchUtilities(
          {
            [`${util}-l`]: (value) => {
              const [color, measure] = value.split("-");
              return { [`--${util}-l`]: `.${twHsl[color][measure][2]}` };
            },
            [`${util}-c`]: (value) => {
              const [color, measure] = value.split("-");
              return { [`--${util}-c`]: `.${twHsl[color][measure][1]}` };
            },
            [`${util}-h`]: (value) => {
              const [color, measure] = value.split("-");
              return { [`--${util}-h`]: `${twHsl[color][measure][0]}` };
            },
            [prop]: foundation(util, prop, ctx),
          },
          { values: theme("hue") }
        );
        // Allows Muting Backgrounds
        if (["fg", "canvas"].includes(ctx)) {
          const muteCtx = ctx == "canvas" ? "fg" : "canvas";
          matchUtilities(
            {
              [`${util}-mute`]: (value) => ({
                [`--${util}-mute`]: value,
                [prop]: `hsl( 
                  var(--${util}-h, var(--${muteCtx}-h))
                  calc( var(--${util}-c, var(--${muteCtx}-c)) * 100% ) 
                  calc( var(--${util}-l, var(--${muteCtx}-l)) * 100% ) 
                / calc( var(--${util}-a, var(--${muteCtx}-a)) * ${
                  value * 100
                }% ) 
                )`.replace(/\s/g, ""),
              }),
            },
            { values: theme("mute") }
          );
        }
        // Allows Changing HSL
        matchUtilities(
          {
            [`${util}-h`]: (value) => ({
              [`--${util}-h`]: value,
              [prop]: foundation(util, prop, ctx),
            }),
          },
          { values: theme("hue") }
        );
        matchUtilities(
          {
            [`${util}-c`]: (value) => ({
              [`--${util}-c`]: value,
              [prop]: foundation(util, prop, ctx),
            }),
          },
          { values: theme("chroma") }
        );
        matchUtilities(
          {
            [`${util}-l`]: (value) => ({
              [`--${util}-l`]: value,
              [prop]: foundation(util, prop, ctx),
            }),
          },
          { values: theme("lightness") }
        );
        matchUtilities(
          {
            [`${util}-a`]: (value) => ({
              [`--${util}-a`]: value,
              [prop]: foundation(util, prop, ctx),
            }),
          },
          { values: theme("alpha") }
        );
      });
    }),
  ],
};
