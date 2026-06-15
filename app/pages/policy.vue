<template>
  <v-container class="px-4 px-md-8 pt-8" max-width="1200">
    <v-alert
      v-if="locale !== 'en'"
      type="info"
      variant="tonal"
      class="mb-8 rounded-xl"
      icon="mdi-translate"
    >
      {{ $t("policy_page.language_notice") }}
    </v-alert>

    <v-card
      class="rounded-xl pa-6 pa-md-10 mb-8 bg-surface border"
      variant="flat"
    >
      <h1
        class="text-h4 font-weight-black mb-4 text-primary d-flex align-center"
      >
        <v-icon icon="mdi-shield-check" class="mr-4" />
        {{ $t("policy_page.title") }}
      </h1>

      <v-divider class="my-6" />

      <!-- Disclaimer -->
      <h2 class="text-h5 font-weight-bold mb-4 text-error d-flex align-center">
        <v-icon icon="mdi-alert" class="mr-2" />
        {{ $t("policy_page.disclaimer") }}
      </h2>
      <p
        class="text-body-1 text-medium-emphasis mb-4 text-error font-weight-medium"
      >
        {{ $t("policy_page.disclaimer_text1") }}
      </p>
      <p class="text-body-1 text-medium-emphasis mb-8 text-error">
        {{ $t("policy_page.disclaimer_text2") }}
      </p>

      <!-- General Policies -->
      <h2 class="text-h5 font-weight-bold mb-4">
        {{ $t("policy_page.general_title") }}
      </h2>
      <ul class="text-body-1 text-medium-emphasis mb-8 pl-6">
        <li class="mb-2" v-for="i in $tm('policy_page.general_list')" :key="i">
          {{ i }}
        </li>
      </ul>

      <!-- Peering Requirements -->
      <h2 class="text-h5 font-weight-bold mb-4">
        {{ $t("policy_page.peering_title") }}
      </h2>
      <ul class="text-body-1 text-medium-emphasis mb-8 pl-6">
        <li class="mb-2" v-for="i in $tm('policy_page.peering_list')" :key="i">
          {{ i }}
        </li>
      </ul>

      <!-- Technical Requirements -->
      <h2 class="text-h5 font-weight-bold mb-4">
        {{ $t("policy_page.tech_title") }}
      </h2>
      <ul class="text-body-1 text-medium-emphasis mb-8 pl-6">
        <li class="mb-2" v-for="i in $tm('policy_page.tech_list')" :key="i">
          {{ i }}
        </li>
      </ul>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";

const { locale } = useI18n();
</script>
