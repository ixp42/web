<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Foot />
  </div>
</template>
<script>
import NavBar from "@/components/Nav";
import Foot from "@/components/Footer";

export default {
  components: {
    NavBar,
    Foot
  }
};
</script>
