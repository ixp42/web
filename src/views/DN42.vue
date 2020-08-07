<template>
  <div class="services">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-6 text-center">
        DN42 Services
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
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "DN42",
        disabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
