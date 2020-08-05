<template>
  <v-container class="grey lighten-5 pa-0 pa-md-12 mx-auto v-sheet text-center">
    <div class="text-h3 font-weight-light">Sponsors</div>
    <v-row justify="center">
      <v-col cols="8">
        <div
          class="title font-weight-light"
        >Thanks to the maintenance and sponsors of these companies or individuals, IX42 can maintain efficient and stable operations.</div>
      </v-col>
    </v-row>
    <v-row v-for="r in sponsor_list" :key="r.row" justify="center">
      <v-spacer />
      <v-col v-for="i in r.items" :key="i">
        <v-img :src="i" contain max-height="60px"></v-img>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import strexp_img from "@/assets/sponsors/strexp.png";
import moecast_img from "@/assets/sponsors/moecast.png";

export default {
  data: () => ({
    sponsor_list: [
      {
        row: "1",
        items: [strexp_img]
      },
      {
        row: "2",
        items: [moecast_img]
      }
    ]
  })
};
</script>

<style>
</style>