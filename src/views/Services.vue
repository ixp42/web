<template>
  <div class="services">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-6 text-center">
        Services for {{ region.name }}
      </div>
      <div
        class="grey--text text-h3 font-weight-light pt-6 mt-6 mb-4 text-center"
      >
        Soon &trade;
      </div>
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
        text: "Services",
        disabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
