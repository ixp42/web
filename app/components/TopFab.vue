<template>
  <v-fab-transition appear>
    <v-fab
      app
      :active="fabshow"
      location="bottom right"
      icon="mdi-arrow-up"
      color="primary"
      size="x-large"
      variant="tonal"
      v-scroll="onScroll"
      @click="scrollToTop"
    />
  </v-fab-transition>
</template>

<script setup>
import { ref } from "vue";
import { useGoTo } from "vuetify";

const fabshow = ref(false);
const goTo = useGoTo();

const onScroll = () => {
  if (typeof window === "undefined") return;
  const top = window.pageYOffset || document.documentElement.scrollTop || 0;
  fabshow.value = top > 300;
};

const scrollToTop = () => {
  goTo(0);
};
</script>
