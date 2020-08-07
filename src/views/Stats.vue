<template>
  <div class="stats">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-4 text-center">
        Statistics for {{ region.name }}
      </div>
      <div class="text-h5 font-weight-light mt-4">Day Graph</div>
      <v-img :src="region.stat + '-day.png'" />
      <div class="text-h5 font-weight-light mt-4">Week Graph</div>
      <v-img :src="region.stat + '-week.png'" />
    </v-container>
  </div>
</template>
<script>
import regions from "@/data/regions.json";

export default {
  computed: {
    region: function() {
      return regions.find(obj => {
        return obj.code === this.$route.params.loc;
      });
    }
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Statistics",
        disabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
