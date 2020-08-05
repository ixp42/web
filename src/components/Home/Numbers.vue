<template>
  <section id="home-numbers">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="3" v-for="i in numbers" :key="i.title">
          <v-card hover class="pt-2 pb-2">
            <v-card-title class="text-h3 font-weight-light justify-center">{{
              i.num
            }}</v-card-title>
            <v-card-subtitle class="text-center mt-1">{{
              i.title
            }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    numbers: [
      {
        num: "3",
        title: "Locations"
      },
      {
        num: "Free",
        title: "Peering Fee"
      },
      {
        num: "10G+",
        title: "Capacity"
      },
      {
        num: "24 x 7",
        title: "Tech Support"
      }
    ]
  })
};
</script>

<style></style>
