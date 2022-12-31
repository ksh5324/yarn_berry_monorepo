var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pnp:/Users/seonghun/공부/개인프로젝트/yarn/packages/design-token/src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors_exports
});
module.exports = __toCommonJS(src_exports);

// pnp:/Users/seonghun/공부/개인프로젝트/yarn/packages/design-token/src/colors/index.ts
var colors_exports = {};
__export(colors_exports, {
  dark: () => dark,
  light: () => light
});
var light = Object.freeze({
  scheme: {
    $white: "#FFF",
    $gray100: "#F2F3F6",
    $gray200: "#EAEBEE",
    $gray300: "#DCDEE3",
    $gray400: "#D1D3D8",
    $gray500: "#ADB1BA",
    $gray600: "#868B94",
    $gray700: "#4D5159",
    $gray900: "#212124"
  },
  semanticScheme: {
    background: "$white"
  }
});
var dark = Object.freeze({
  scheme: {
    $white: "#212124",
    $gray100: "#2B2E33",
    $gray200: "#34373D",
    $gray300: "#43474F",
    $gray400: "#50545C",
    $gray500: "#6D717A",
    $gray600: "#868B94",
    $gray700: "#ADB1BA",
    $gray900: "#EAEBEE"
  },
  semanticScheme: {
    background: "$white"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors
});
//# sourceMappingURL=index.js.map
