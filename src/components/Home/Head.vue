<template>
  <section id="home-head" class="primary">
    <v-responsive class="mx-auto pa-6 pt-12 white--text">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-responsive class="overflow-visible">
              <div class="text-h3 font-weight-light mb-4">
                {{ $t("title-1") }}
                <br />
                {{ $t("title-2") }}
              </div>
              <p class="font-weight-light" v-t="'intro'" />

              <div
                class="d-flex flex-wrap justify-left justify-md-start align-center mx-n2"
              >
                <v-btn
                  light
                  class="primary--text ma-2"
                  elevation="6"
                  x-large
                  href="https://ix42.org/connect"
                >
                  <v-icon left>mdi-transit-connection-variant</v-icon>
                  {{ $t("connect") }}
                </v-btn>
                <v-btn
                  dark
                  outlined
                  class="ma-2"
                  elevation="6"
                  x-large
                  @click="$vuetify.goTo('#home-about')"
                >
                  <v-icon left>mdi-account-multiple</v-icon>
                  {{ $t("about") }}
                </v-btn>
              </div>
            </v-responsive>
          </v-col>
          <v-spacer />
          <v-col class="hidden-md-and-down" cols="12" lg="6">
            <v-img :src="global_map" max-width="100%" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>

<script>
import global_map from "@/assets/map.svg";

export default {
  data: () => ({
    global_map: global_map
  })
};
</script>

<style></style>

<i18n>
{
  "en": {
    "title-1": "Affordable & Efficient",
    "title-2": "Interconnections",
    "intro": "Internet eXchange 42 provides affordable and efficient interconnection services and operates several carrier and data center-neutral Internet Exchanges.",
    "connect": "Get Connected",
    "about": "About Us"
  },
  "zh": {
    "title-1": "经济且高效的",
    "title-2": "互联解决方案",
    "intro": "Internet eXchange 42 提供经济且高效的的网络互联服务，并运营多个与运营商和数据中心无关的互联网交换中心。",
    "connect": "立即接入",
    "about": "关于我们"
  }
}
</i18n>
