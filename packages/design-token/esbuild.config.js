const { build } = require("esbuild");
const pkg = require("./package.json");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const inlineImage = require("esbuild-plugin-inline-image");

build({
  entryPoints: ["./src/index.ts"],
  outfile: pkg.main,
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  plugins: [pnpPlugin(), inlineImage()],
}).catch(() => process.exit(1));
