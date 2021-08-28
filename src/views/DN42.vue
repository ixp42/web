<template>
  <div class="services">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 mb-6 text-center">
        IX42 <v-icon x-large>mdi-connection</v-icon> DN42
      </div>
      <div class="text-h4 font-weight-light pt-6 mt-6 mb-4 text-center">
        {{ $t("desc") }}
      </div>
      <div class="text-center justify-center">
        {{ $t("info") }}
        <br />
        <img :src="assets.dn42_logo" max-width="200px" />
      </div>
      <div class="text-center">
        {{ $t("info-ix") }}
      </div>
      <div class="text-h4 font-weight-light pt-6 mt-6 mb-4 text-center">
        <v-btn href="http://wiki.dn42.dev/" color="primary"
          ><v-icon left>mdi-information</v-icon>{{ $t("learn-more") }}</v-btn
        >
      </div>
    </v-container>
  </div>
</template>
<script>
import dn42_logo from "@/assets/dn42_logo.png";

export default {
  data: () => ({
    assets: {
      dn42_logo: dn42_logo
    },
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "DN42",
        disabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
<i18n>
{
  "en": {
    "desc": "Connect thousands of distributed networks through us!",
    "info": "Decentralized network 42 (also known as dn42) is a decentralized peer-to-peer network built using VPNs and software/hardware BGP routers.",
    "info-ix": "Due to our new IXP facility architecture design, it allows us (in some locations) to enable peering traffic exchange between the clearnet and the DN42 network. At the same time, the IX RS also supports the exchange of routing information between DN42 and the clearnet.",
    "learn-more": "Learn More"
  },
  "zh": {
    "desc": "通过我们连接数以千计的分布式网络！",
    "info": "去中心化网络 42（简称为 dn42），是一个去中心化、端到端加密的网络，它通过使用 VPN 和软件／硬件的边界网关协议进行构建。",
    "info-ix": "全新的架构设计使得我们（在部分地点）允许公网和 DN42 网络进行对等流量交换，同时所在地点的 RS 也支持 DN42 和公网的路由信息交换。",
    "learn-more": "了解更多"
  }
}
</i18n>
