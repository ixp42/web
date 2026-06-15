<template>
  <v-container class="px-4 px-md-8 pt-8" max-width="1200">
    <div class="text-center mb-12">
      <h1
        class="text-h3 font-weight-black text-primary mb-4 d-flex justify-center align-center"
      >
        <v-icon icon="mdi-account-multiple" size="large" class="mr-4" />
        {{ $t("join.title") }}
      </h1>
      <h2 class="text-h6 text-medium-emphasis font-weight-regular">
        {{ $t("join.subtitle") }}
      </h2>
    </div>

    <v-timeline align="start" side="end" density="compact" class="mb-10">
      <v-timeline-item dot-color="primary" size="small" fill-dot>
        <template #icon>
          <span class="text-white text-caption font-weight-bold">1</span>
        </template>
        <h3 class="text-h6 font-weight-bold mt-0 mb-2 text-primary">
          {{ $t("join.steps.1_title") }}
        </h3>
        <p class="text-body-1 text-medium-emphasis">
          {{ $t("join.steps.1_desc") }}
        </p>
      </v-timeline-item>

      <v-timeline-item dot-color="primary" size="small" fill-dot>
        <template #icon>
          <span class="text-white text-caption font-weight-bold">2</span>
        </template>
        <h3 class="text-h6 font-weight-bold mt-0 mb-2 text-primary">
          {{ $t("join.steps.2_title") }}
        </h3>
        <p class="text-body-1 text-medium-emphasis">
          {{ $t("join.steps.2_desc") }}
        </p>
      </v-timeline-item>

      <v-timeline-item dot-color="primary" size="small" fill-dot>
        <template #icon>
          <span class="text-white text-caption font-weight-bold">3</span>
        </template>
        <h3 class="text-h6 font-weight-bold mt-0 mb-2 text-primary">
          {{ $t("join.steps.3_title") }}
        </h3>
        <p class="text-body-1 text-medium-emphasis mb-2">
          {{ $t("join.steps.3_desc") }}
        </p>
        <v-btn
          class="mb-2"
          href="https://github.com/ixp42/bird-config"
          variant="tonal"
          color="primary"
          rounded="pill"
          prepend-icon="mdi-github"
          disabled
        >
          Reference Config (BIRD 2+) [WIP]
        </v-btn>
      </v-timeline-item>

      <v-timeline-item dot-color="primary" size="small" fill-dot>
        <template #icon>
          <span class="text-white text-caption font-weight-bold">4</span>
        </template>
        <h3 class="text-h6 font-weight-bold mt-0 mb-2 text-primary">
          {{ $t("join.steps.4_title") }}
        </h3>
        <p class="text-body-1 text-medium-emphasis mb-2">
          {{ $t("join.steps.4_desc") }}
        </p>
        <v-btn
          class="mb-2 mr-2"
          href="https://github.com/ixp42/web"
          disabled
          variant="tonal"
          color="primary"
          rounded="pill"
          prepend-icon="mdi-code-json"
        >
          {{ $t("join.formats") }}
        </v-btn>
        <v-btn
          class="mb-2"
          href="mailto:support@ix42.org"
          variant="tonal"
          color="primary"
          rounded="pill"
          prepend-icon="mdi-email-outline"
        >
          {{ $t("join.contact") }}
        </v-btn>
      </v-timeline-item>

      <v-timeline-item dot-color="success" fill-dot>
        <template #icon>
          <v-icon color="white" size="small">mdi-check</v-icon>
        </template>
        <h3 class="text-h6 font-weight-bold mt-0 mb-2 text-success">
          {{ $t("join.done_title") }}
        </h3>
        <p class="text-body-1 text-medium-emphasis">
          {{ $t("join.done_desc") }}
        </p>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
