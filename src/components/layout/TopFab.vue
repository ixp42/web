<template>
  <v-fab-transition>
    <v-btn
      fixed
      bottom
      right
      fab
      v-scroll="onScroll"
      v-show="fabshow"
      @click.stop="$vuetify.goTo(0)"
    >
      <v-icon color="primary">mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    fabshow: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fabshow = top > 300;
    }
  }
};
</script>

<style></style>
