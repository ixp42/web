<template>
  <v-card class="mx-auto" @click.stop="toggle" :disabled="!item.active">
    <v-img
      class="white--text align-end region-img"
      height="200px"
      :src="item.img"
    >
      <v-card-title class="text-h4 font-weight-light">{{
        item.name
      }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <v-chip
        v-for="f in item.features"
        :key="f"
        class="ma-2"
        :color="f == 'Coming Soon' ? 'warning' : 'primary'"
        outlined
        small
        >{{ f }}</v-chip
      >
    </v-card-text>
    <v-overlay absolute :value="active" opacity="0.8">
      <v-row>
        <v-col cols="4" class="text-center">
          <v-btn color="primary" fab :to="'/stats/' + item.code">
            <v-icon>mdi-graph</v-icon>
          </v-btn>
          <p class="mt-2">{{ $t("statistics") }}</p>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-btn color="grey" fab :to="'/members/' + item.code">
            <v-icon>mdi-lan</v-icon>
          </v-btn>
          <p class="mt-2">{{ $t("nets") }}</p>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-btn color="success" fab :to="'/services/' + item.code">
            <v-icon>mdi-server-network</v-icon>
          </v-btn>
          <p class="mt-2">{{ $t("services") }}</p>
        </v-col>
      </v-row>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  props: ["item", "active", "toggle"]
};
</script>

<style lang="scss">
.region-img .v-image__image {
  box-shadow: inset 0px -50px 20px 0px rgba($color: #000000, $alpha: 0.8);
}
</style>

<i18n>
{
  "en": {
    "statistics": "Statistics",
    "nets": "Connected Networks",
    "services": "Services"
  },
  "zh": {
    "statistics": "统计",
    "nets": "成员",
    "services": "服务"
  }
}
</i18n>
