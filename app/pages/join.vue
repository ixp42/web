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
        <v-dialog max-width="1200">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              class="mb-2 mr-2"
              variant="tonal"
              color="primary"
              rounded="pill"
              prepend-icon="mdi-code-json"
            >
              {{ $t("join.formats") }}
            </v-btn>
          </template>

          <v-card title="Examples">
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-code class="overflow-y-auto">
                    <v-chip text="schema" />
                    <pre v-text="ix_schema" />
                  </v-code>
                </v-col>
                <v-col cols="6">
                  <v-code>
                    <v-chip text="example" />
                    <pre v-text="ix_example" />
                  </v-code>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-dialog>
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

<script setup lang="ts">
import ix_schema from "@/assets/data/ix.schema.json";
import ix_example from "@/assets/data/ix.example.json";
</script>
