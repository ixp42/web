<template>
  <v-app-bar
    app
    scroll-behavior="elevate"
    color="surface"
    class="border-b"
    height="76"
  >
    <v-container class="d-flex align-center px-4" max-width="1600">
      <NuxtLink
        to="/"
        class="text-decoration-none d-flex align-center text-primary mr-auto font-weight-black text-title-large"
      >
        <v-icon class="mr-2">mdi-hexagon-multiple</v-icon>
        <span class="hidden-sm-and-down">Internet eXchange 42</span>
        <span class="hidden-md-and-up">ix42</span>
      </NuxtLink>

      <div class="d-flex align-center">
        <v-btn
          class="rounded-xl mb-1"
          :text="$t('nav.connect')"
          to="/connect"
        />
        <v-btn class="rounded-xl mb-1" :text="$t('nav.join')" to="/join" />
        <v-btn class="rounded-xl mb-1" :text="$t('nav.policy')" to="/policy" />
        <v-menu offset-y transition="slide-y-transition" rounded="xl">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              prepend-icon="mdi-translate"
              append-icon="mdi-menu-down"
              class="text-medium-emphasis mb-1"
            >
              <span class="hidden-sm-and-down">{{ currentLocaleName }}</span>
            </v-btn>
          </template>
          <v-card min-width="150" rounded="xl" class="mt-2 border-0 bg-surface">
            <v-list bg-color="transparent" class="pa-2" density="compact">
              <v-list-item
                v-for="l in locales"
                :key="typeof l === 'string' ? l : l.code"
                :value="typeof l === 'string' ? l : l.code"
                :active="locale === (typeof l === 'string' ? l : l.code)"
                @click="setLocale(typeof l === 'string' ? l : l.code)"
                color="primary"
                class="rounded-xl mb-1"
              >
                <v-list-item-title class="font-weight-medium">
                  {{ typeof l === "string" ? l : l.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-btn
          icon
          @click="toggleTheme"
          variant="text"
          class="ml-1 text-medium-emphasis mb-1"
        >
          <v-icon>{{
            isDark ? "mdi-weather-night" : "mdi-white-balance-sunny"
          }}</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n, computed } from "#imports";
import { useTheme } from "vuetify";

const { locale, locales, setLocale } = useI18n();
const theme = useTheme();

const currentLocaleName = computed(() => {
  const current = locales.value.find(
    (l) => (typeof l === "string" ? l : l.code) === locale.value,
  );
  return typeof current === "string" ? current : current?.name || "Language";
});

const isDark = computed(() => theme.global.current.value.dark);
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
};
</script>
