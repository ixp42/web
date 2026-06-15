import en from "./locales/en.json";
import zh from "./locales/zh.json";

import { en as $vuetify_en } from "vuetify/locale";
import { zhHans as $vuetify_zhs } from "vuetify/locale";

export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'en',
    legacy: false,
    locale: "en",
    messages: {
      en: {
        ...en,
        $vuetify: $vuetify_en,
      },
      zh: {
        ...zh,
        $vuetify: $vuetify_zhs,
      },
    },
  };
});
