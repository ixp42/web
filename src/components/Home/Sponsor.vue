<template>
  <v-container
    class="grey lighten-5 pa-0 pa-md-12 pt-6 mx-auto v-sheet text-center"
  >
    <div class="text-h3 font-weight-light" v-t="'title'" />
    <v-row justify="center">
      <v-col cols="8">
        <div class="title font-weight-light" v-t="'desc'" />
      </v-col>
    </v-row>
    <v-row v-for="r in sponsor_list" :key="r.row" justify="center">
      <v-spacer />
      <v-col v-for="i in r.items" :key="i.img">
        <a :href="i.url">
          <v-img :src="i.img" contain max-height="60px"></v-img>
        </a>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import strexp_img from "@/assets/sponsors/strexp.png";
import moecast_img from "@/assets/sponsors/moecast.png";
import sunnet_img from "@/assets/sponsors/sunnet.png";

export default {
  data: () => ({
    sponsor_list: [
      {
        row: "1",
        items: [
          {
            img: strexp_img,
            url: "https://strexp.net"
          }
        ]
      },
      {
        row: "2",
        items: [
          {
            img: moecast_img,
            url: "http://moecast.dn42"
          }
        ]
      },
      {
        row: "3",
        items: [
          {
            img: sunnet_img,
            url: "https://as140936.com"
          }
        ]
      }
    ]
  })
};
</script>

<i18n>
{
  "en": {
    "title": "Sponsors",
    "desc": "Thanks to the maintenance and sponsors of these companies or individuals, IX42 can maintain efficient and stable operations."
  },
  "zh": {
    "title": "赞助商",
    "desc": "感谢以下提供赞助和维护的公司及个人，使得 IX42 得以长期高效且稳定地运行。"
  }
}
</i18n>
