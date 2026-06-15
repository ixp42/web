import prettierConfig from "eslint-config-prettier";
import vuetifyConfig from "eslint-config-vuetify";
import prettierPlugin from "eslint-plugin-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  ...vuetifyConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  vuetifyConfig({
    ts: true,
  }),
  prettierConfig,
);
