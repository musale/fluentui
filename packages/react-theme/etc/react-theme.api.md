## API Report File for "@fluentui/react-theme"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export type AlphaColors = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

// @public (undocumented)
export type BackgroundColorTokens = {
    background: string;
    backgroundHover: string;
    backgroundPressed: string;
    backgroundSelected: string;
};

// @public (undocumented)
export const black = "#000000";

// @public (undocumented)
export const blackAlpha: Record<AlphaColors, string>;

// @public (undocumented)
export type BorderRadius = {
    none: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    circular: string;
};

// @public (undocumented)
export const borderRadius: BorderRadius;

// @public (undocumented)
export type BrandColorTokens = {
    brandBackground: string;
    brandBackgroundHover: string;
    brandBackgroundPressed: string;
    brandBackgroundSelected: string;
    brandBackgroundStatic: string;
};

// @public (undocumented)
export type BrandVariants = ColorVariants & {
    shade60: string;
};

// @public
export type ColorVariants = {
    shade50: string;
    shade40: string;
    shade30: string;
    shade20: string;
    shade10: string;
    primary: string;
    tint10: string;
    tint20: string;
    tint30: string;
    tint40: string;
    tint50: string;
    tint60: string;
};

// @public (undocumented)
export const createDarkTheme: (brand: BrandVariants) => Theme;

// @public (undocumented)
export const createGlobalTheme: (brand: BrandVariants) => Theme['global'];

// @public (undocumented)
export const createHighContrastTheme: (brand: BrandVariants) => Theme;

// @public (undocumented)
export const createLightTheme: (brand: BrandVariants) => Theme;

// @public (undocumented)
export const createTeamsDarkTheme: (brand: BrandVariants) => Theme;

// @public (undocumented)
export type FontFamilies = {
    base: string;
    monospace: string;
    numeric: string;
};

// @public (undocumented)
export const fontFamilies: FontFamilies;

// @public (undocumented)
export type FontSizes = {
    base: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    hero: {
        700: string;
        800: string;
        900: string;
        1000: string;
    };
};

// @public (undocumented)
export const fontSizes: FontSizes;

// @public (undocumented)
export type FontWeights = {
    regular: number;
    medium: number;
    semibold: number;
};

// @public (undocumented)
export const fontWeights: FontWeights;

// @public (undocumented)
export type GhostColorTokens = {
    ghostBackground: string;
    ghostBackgroundHover: string;
    ghostBackgroundPressed: string;
    ghostBackgroundSelected: string;
};

// @public
export type GlobalSharedColors = {
    darkRed: ColorVariants;
    burgundy: ColorVariants;
    cranberry: ColorVariants;
    red: ColorVariants;
    darkOrange: ColorVariants;
    bronze: ColorVariants;
    pumpkin: ColorVariants;
    orange: ColorVariants;
    peach: ColorVariants;
    marigold: ColorVariants;
    yellow: ColorVariants;
    gold: ColorVariants;
    brass: ColorVariants;
    brown: ColorVariants;
    darkBrown: ColorVariants;
    lime: ColorVariants;
    forest: ColorVariants;
    seafoam: ColorVariants;
    lightGreen: ColorVariants;
    green: ColorVariants;
    darkGreen: ColorVariants;
    lightTeal: ColorVariants;
    teal: ColorVariants;
    darkTeal: ColorVariants;
    cyan: ColorVariants;
    steel: ColorVariants;
    lightBlue: ColorVariants;
    blue: ColorVariants;
    royalBlue: ColorVariants;
    darkBlue: ColorVariants;
    cornflower: ColorVariants;
    navy: ColorVariants;
    lavender: ColorVariants;
    purple: ColorVariants;
    darkPurple: ColorVariants;
    orchid: ColorVariants;
    grape: ColorVariants;
    berry: ColorVariants;
    lilac: ColorVariants;
    pink: ColorVariants;
    hotPink: ColorVariants;
    magenta: ColorVariants;
    plum: ColorVariants;
    beige: ColorVariants;
    mink: ColorVariants;
    silver: ColorVariants;
    platinum: ColorVariants;
    anchor: ColorVariants;
    charcoal: ColorVariants;
};

// @public (undocumented)
export const grey: Record<Greys, string>;

// @public (undocumented)
export type Greys = 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56 | 58 | 60 | 62 | 64 | 66 | 68 | 70 | 72 | 74 | 76 | 78 | 80 | 82 | 84 | 86 | 88 | 90 | 92 | 94 | 96 | 98 | 100;

// @public (undocumented)
export const hcButtonFace = "#ffffff";

// @public (undocumented)
export const hcButtonText = "#000000";

// @public (undocumented)
export const hcCanvas = "#000000";

// @public (undocumented)
export const hcCanvasText = "#ffffff";

// @public (undocumented)
export const hcDisabled = "#3ff23f";

// @public (undocumented)
export const hcHighlight = "#1aebff";

// @public (undocumented)
export const hcHighlightText = "#000000";

// @public (undocumented)
export const hcHyperlink = "#ffff00";

// @public (undocumented)
export type LineHeights = FontSizes;

// @public (undocumented)
export const lineHeights: LineHeights;

// @public (undocumented)
export function mergeThemes(a: Theme | undefined, b: PartialTheme | Theme | undefined): Theme;

// @public
export type NeutralColorTokens = {
    neutralForeground1: string;
    neutralForeground2: string;
    neutralForeground2Hover: string;
    neutralForeground2Pressed: string;
    neutralForeground2Selected: string;
    neutralForeground2BrandHover: string;
    neutralForeground2BrandPressed: string;
    neutralForeground2BrandSelected: string;
    neutralForeground3: string;
    neutralForeground3Hover: string;
    neutralForeground3Pressed: string;
    neutralForeground3Selected: string;
    neutralForeground3BrandHover: string;
    neutralForeground3BrandPressed: string;
    neutralForeground3BrandSelected: string;
    neutralForeground4: string;
    neutralForegroundDisabled: string;
    brandForegroundLink: string;
    brandForegroundLinkHover: string;
    brandForegroundLinkPressed: string;
    brandForegroundLinkSelected: string;
    compoundBrandForeground1: string;
    compoundBrandForeground1Hover: string;
    compoundBrandForeground1Pressed: string;
    brandForeground1: string;
    brandForeground2: string;
    neutralForegroundInverted: string;
    neutralForegroundOnBrand: string;
    neutralForegroundInvertedLink: string;
    neutralForegroundInvertedLinkHover: string;
    neutralForegroundInvertedLinkPressed: string;
    neutralForegroundInvertedLinkSelected: string;
    neutralBackground1: string;
    neutralBackground1Hover: string;
    neutralBackground1Pressed: string;
    neutralBackground1Selected: string;
    neutralBackground2: string;
    neutralBackground2Hover: string;
    neutralBackground2Pressed: string;
    neutralBackground2Selected: string;
    neutralBackground3: string;
    neutralBackground3Hover: string;
    neutralBackground3Pressed: string;
    neutralBackground3Selected: string;
    neutralBackground4: string;
    neutralBackground4Hover: string;
    neutralBackground4Pressed: string;
    neutralBackground4Selected: string;
    neutralBackground5: string;
    neutralBackground5Hover: string;
    neutralBackground5Pressed: string;
    neutralBackground5Selected: string;
    neutralBackground6: string;
    neutralBackgroundInverted: string;
    subtleBackground: string;
    subtleBackgroundHover: string;
    subtleBackgroundPressed: string;
    subtleBackgroundSelected: string;
    transparentBackground: string;
    transparentBackgroundHover: string;
    transparentBackgroundPressed: string;
    transparentBackgroundSelected: string;
    neutralBackgroundDisabled: string;
    neutralStencil1: string;
    neutralStencil2: string;
    brandBackground: string;
    brandBackgroundHover: string;
    brandBackgroundPressed: string;
    brandBackgroundSelected: string;
    compoundBrandBackground: string;
    compoundBrandBackgroundHover: string;
    compoundBrandBackgroundPressed: string;
    brandBackgroundStatic: string;
    brandBackground2: string;
    neutralStrokeAccessible: string;
    neutralStrokeAccessibleHover: string;
    neutralStrokeAccessiblePressed: string;
    neutralStrokeAccessibleSelected: string;
    neutralStroke1: string;
    neutralStroke1Hover: string;
    neutralStroke1Pressed: string;
    neutralStroke1Selected: string;
    neutralStroke2: string;
    neutralStroke3: string;
    brandStroke1: string;
    brandStroke2: string;
    compoundBrandStroke: string;
    compoundBrandStrokeHover: string;
    compoundBrandStrokePressed: string;
    neutralStrokeDisabled: string;
    transparentStroke: string;
    transparentStrokeInteractive: string;
    transparentStrokeDisabled: string;
    strokeFocus1: string;
    strokeFocus2: string;
    neutralShadowAmbient: string;
    neutralShadowKey: string;
    neutralShadowAmbientLighter: string;
    neutralShadowKeyLighter: string;
    neutralShadowAmbientDarker: string;
    neutralShadowKeyDarker: string;
    brandShadowAmbient: string;
    brandShadowKey: string;
};

// Warning: (ae-forgotten-export) The symbol "RecursivePartial" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type PartialTheme = RecursivePartial<Theme>;

// @public
export type ProductBrandColors = {
    teams: BrandVariants;
    web: BrandVariants;
};

// @public
export type ShadowLevelTokens = {
    shadow2: string;
    shadow4: string;
    shadow8: string;
    shadow16: string;
    shadow28: string;
    shadow64: string;
};

// @public (undocumented)
export const sharedColors: GlobalSharedColors;

// @public
export type SharedColorTokens = {
    background1: string;
    background2: string;
    background3: string;
    foreground1: string;
    foreground2: string;
    foreground3: string;
    borderActive: string;
    border2: string;
};

// @public (undocumented)
export type StrokeWidths = {
    thin: string;
    thick: string;
    thicker: string;
    thickest: string;
};

// @public (undocumented)
export const strokeWidths: StrokeWidths;

// @public (undocumented)
export const teamsDarkTheme: Theme;

// @public (undocumented)
export const teamsHighContrastTheme: Theme;

// @public (undocumented)
export const teamsLightTheme: Theme;

// @public (undocumented)
export type TextAlignment = 'inherit' | 'initial' | 'revert' | 'unset' | 'center' | 'end' | 'start' | 'justify' | 'left' | 'match-parent' | 'right';

// @public (undocumented)
export type TextAlignments = {
    start: TextAlignment;
    center: TextAlignment;
    end: TextAlignment;
    justify: TextAlignment;
};

// @public (undocumented)
export const textAlignments: TextAlignments;

// @public (undocumented)
export type Theme = {
    global: {
        color: {
            black: string;
            white: string;
            hcHyperlink: string;
            hcHighlight: string;
            hcDisabled: string;
            hcCanvas: string;
            hcCanvasText: string;
            hcHighlightText: string;
            hcButtonText: string;
            hcButtonFace: string;
        };
        palette: GlobalSharedColors & {
            brand: BrandVariants;
            grey: Record<Greys, string>;
            whiteAlpha: Record<AlphaColors, string>;
            blackAlpha: Record<AlphaColors, string>;
        };
        type: {
            fontSizes: FontSizes;
            fontWeights: FontWeights;
            fontFamilies: FontFamilies;
            lineHeights: LineHeights;
            alignment: TextAlignments;
        };
        borderRadius: BorderRadius;
        strokeWidth: StrokeWidths;
    };
    alias: {
        color: Record<keyof GlobalSharedColors, SharedColorTokens> & {
            neutral: NeutralColorTokens;
        };
        shadow: ShadowLevelTokens;
    };
};

// @public (undocumented)
export function themeToCSSVariables(theme: Theme): Record<string, string>;

// @public (undocumented)
export type TransparentColorTokens = {
    transparentBackground: string;
    transparentBackgroundHover: string;
    transparentBackgroundPressed: string;
    transparentBackgroundSelected: string;
};

// @public (undocumented)
export const webDarkTheme: Theme;

// @public (undocumented)
export const webHighContrastTheme: Theme;

// @public (undocumented)
export const webLightTheme: Theme;

// @public (undocumented)
export const white = "#ffffff";

// @public (undocumented)
export const whiteAlpha: Record<AlphaColors, string>;

// (No @packageDocumentation comment for this package)

```