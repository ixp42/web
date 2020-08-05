<template>
  <div class="home">
    <HomeHead />
    <HomeAbout />
    <HomeNumbers />
    <HomeSponsor />
  </div>
</template>

<script>
import HomeHead from "@/components/Home/Head";
import HomeAbout from "@/components/Home/About";
import HomeNumbers from "@/components/Home/Numbers";
import HomeSponsor from "@/components/Home/Sponsor";

export default {
  name: "Home",
  components: {
    HomeHead: HomeHead,
    HomeAbout: HomeAbout,
    HomeSponsor: HomeSponsor,
    HomeNumbers: HomeNumbers
  }
};
</script>

<style lang="scss" scoped>
</style>