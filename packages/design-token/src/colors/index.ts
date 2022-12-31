import type { ColorScheme, ColorTheme, SemanticColorScheme } from "./types";

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    $white: "#FFF",
    // gray
    $gray100: "#F2F3F6",
    $gray200: "#EAEBEE",
    $gray300: "#DCDEE3",
    $gray400: "#D1D3D8",
    $gray500: "#ADB1BA",
    $gray600: "#868B94",
    $gray700: "#4D5159",
    $gray900: "#212124",
  } as ColorScheme,
  semanticScheme: {
    background: "$white",
  } as SemanticColorScheme,
});

export const dark: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    $white: "#212124",
    // gray
    $gray100: "#2B2E33",
    $gray200: "#34373D",
    $gray300: "#43474F",
    $gray400: "#50545C",
    $gray500: "#6D717A",
    $gray600: "#868B94",
    $gray700: "#ADB1BA",
    $gray900: "#EAEBEE",
  } as ColorTheme["scheme"],
  semanticScheme: {
    background: "$white",
  } as ColorTheme["semanticScheme"],
});
