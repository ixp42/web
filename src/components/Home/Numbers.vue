<template>
  <section id="home-numbers">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="3" v-for="i in numbers" :key="i.title">
          <v-card hover class="pt-2 pb-2">
            <v-card-title class="text-h3 font-weight-light justify-center">{{
              $t(i.num)
            }}</v-card-title>
            <v-card-subtitle class="text-center mt-1" v-t="i.title" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    numbers: [
      {
        num: "locations-num",
        title: "locations"
      },
      {
        num: "peeringfee-num",
        title: "peeringfee"
      },
      {
        num: "capacity-num",
        title: "capacity"
      },
      {
        num: "tech-num",
        title: "tech"
      }
    ]
  })
};
</script>

<i18n>
{
  "en": {
    "locations-num": "3",
    "peeringfee-num": "Free",
    "capacity-num": "10G+",
    "tech-num": "24 x 7",
    "locations": "Locations Available",
    "free": "Free",
    "peeringfee": "Peering Fee",
    "capacity": "Maximum Capacity",
    "tech": "Tech Support"
  },
  "zh": {
    "locations-num": "3",
    "peeringfee-num": "免费",
    "capacity-num": "10G+",
    "tech-num": "24 x 7",
    "locations": "可使用的位置",
    "free": "免费",
    "peeringfee": "对等费用",
    "capacity": "最大容量",
    "tech": "技术支持"
  }
}
</i18n>
