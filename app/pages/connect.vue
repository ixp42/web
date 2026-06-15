<template>
  <v-container class="px-4 px-md-8 pt-8" max-width="1200">
    <div class="text-center mb-12">
      <h1 class="text-h3 font-weight-black text-primary mb-4 d-flex justify-center align-center">
        <v-icon icon="mdi-transit-connection-variant" size="large" class="mr-4" />
        {{ $t("connect.title") }}
      </h1>
      <h2 class="text-h6 text-medium-emphasis font-weight-regular">
        {{ $t("connect.subtitle") }}
      </h2>
    </div>

    <v-row>
      <v-col cols="12" md="6" v-for="i in 4" :key="i">
        <v-card class="h-100 rounded-xl pa-6 border bg-surface transition-swing" hover variant="flat">
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" class="text-h6 font-weight-bold mr-4" size="48">
              {{ i }}
            </v-avatar>
            <h3 class="text-h5 font-weight-bold">{{ $t(`connect.steps.${i}_title`) }}</h3>
          </div>
          <p class="text-body-1 text-medium-emphasis ml-16">
            {{ $t(`connect.steps.${i}_desc`) }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
