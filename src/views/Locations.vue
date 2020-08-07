<template>
  <div class="locations">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-2" v-t="'title'" />
      <div class="text-title font-weight-light">
        {{ $t("desc1") }}
        <br />
        {{ $t("desc2") }}
      </div>
      <v-item-group>
        <v-row class="mt-6">
          <v-col
            cols="12"
            md="6"
            lg="4"
            v-for="region in regions"
            :key="region.code"
          >
            <v-item v-slot:default="{ active, toggle }">
              <RegionCard :item="region" :active="active" :toggle="toggle" />
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>

      <v-banner elevation="2" rounded class="mt-4">
        <v-avatar slot="icon" color="primary" size="40">
          <v-icon icon="mdi-lock" color="white">mdi-map</v-icon>
        </v-avatar>
        {{ $t("moreloc") }}
        <template v-slot:actions>
          <v-btn
            text
            color="primary"
            href="mailto:info@ix42.org"
            v-t="'tellus'"
          />
        </template>
      </v-banner>
    </v-container>
  </div>
</template>
<script>
import regions from "@/data/regions.json";
import RegionCard from "@/components/Locations/RegionCard";

export default {
  name: "Home",
  components: { RegionCard },
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Locations",
        disabled: true,
        href: "/locations"
      }
    ],
    regions: regions
  })
};
</script>

<i18n>
{
  "en": {
    "title": "Choose A Location:",
    "desc1": "We have peering infrastructure distributed around the world, all of which are provided by our sponsors.",
    "desc2": "These locations are far apart and currently do not connected with each other.",
    "moreloc": "Need more locations for your network?",
    "tellus": "Tell us!"
  },
  "zh": {
    "title": "选择一个地点:",
    "desc1": "我们的对等基础设施分布在世界各地，所有这些都由我们的赞助商提供。",
    "desc2": "这些位置相距较远，目前尚未相互连接。",
    "moreloc": "您的网络需要更多地点？",
    "tellus": "告诉我们!"
  }
}
</i18n>
