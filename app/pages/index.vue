<template>
  <v-container class="px-4 px-md-8 pt-8" max-width="1600">
    <!-- Hero Section -->
    <v-card
      color="primary"
      class="pa-6 pa-md-10 rounded-xl mb-12"
      variant="flat"
    >
      <v-row align="center">
        <v-col cols="12" lg="6">
          <h1 class="text-h4 text-md-h3 font-weight-bold mb-4">
            {{ $t("hero.title") }}
          </h1>
          <h2 class="text-h6 text-md-h5 font-weight-medium mb-6 opacity-90">
            {{ $t("hero.subtitle") }}
          </h2>
          <p class="text-body-1 opacity-80 mb-8" style="max-width: 800px">
            {{ $t("hero.description") }}
          </p>
          <div class="d-flex flex-column flex-sm-row mt-8 gap-4">
            <v-btn
              prepend-icon="mdi-transit-connection-variant"
              :text="$t('hero.connect')"
              class="mb-4 mb-sm-0 mr-sm-4"
              color="surface"
              variant="flat"
              size="x-large"
              rounded="pill"
              to="/connect"
            />
            <v-btn
              prepend-icon="mdi-account-multiple"
              :text="$t('hero.join')"
              color="surface"
              variant="outlined"
              size="x-large"
              rounded="pill"
              to="/join"
            />
          </div>
        </v-col>
        <v-col class="hidden-md-and-down" cols="12" lg="6">
          <v-img src="@/assets/map.svg" max-width="100%" />
        </v-col>
      </v-row>
    </v-card>

    <!-- IX List Table Section -->
    <v-row class="mb-12">
      <v-col cols="12">
        <v-card class="rounded-xl border bg-surface" variant="flat">
          <v-card-title
            class="pa-6 text-title-large font-weight-bold d-flex align-center"
          >
            <v-icon
              icon="mdi-server-network"
              class="mr-3"
              color="primary"
            ></v-icon>
            {{ $t("table.title") }}
            <v-chip class="ml-4" color="primary" :text="totalIxCount" />
          </v-card-title>

          <v-divider></v-divider>

          <DataTable />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";

const store = useAppStore();
const { totalIxCount } = storeToRefs(store);
</script>
