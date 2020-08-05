<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <Foot />
  </v-app>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Foot from "@/components/layout/Footer";

export default {
  name: "App",

  components: { NavBar, Foot },

  data: () => ({})
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 960px;
}
</style>