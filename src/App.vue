<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
      <TopFab />
    </v-main>
    <Foot />
  </v-app>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Foot from "@/components/layout/Footer";
import TopFab from "@/components/layout/TopFab";

export default {
  name: "App",

  components: { NavBar, Foot, TopFab },

  data: () => ({}),

  mounted: function() {
    if (navigator.language || navigator.userLanguage === "zh-CN")
      this.$i18n.locale = "zh";
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 960px;
}
</style>
