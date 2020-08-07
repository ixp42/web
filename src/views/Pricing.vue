<template>
  <div class="pricing">
    <v-container class="text-center">
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-4" v-t="'title'" />

      <v-row>
        <v-spacer />
        <v-col cols="12" md="10" lg="8">
          <div class="text-title font-weight-light" v-t="'desc'" />
        </v-col>
        <v-spacer />
      </v-row>
      <v-divider />

      <v-row>
        <v-spacer />
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="text-h3 font-weight-light mb-2 justify-center">
              <v-icon x-large class="mr-2" color="primary">mdi-ethernet</v-icon>
              $500
              <small>/m</small>
            </v-card-title>
            <v-card-subtitle class="text-center" v-t="'physical.title'" />
            <v-divider />
            <v-list dense disabled>
              <v-list-item-group>
                <v-list-item
                  class="justify-center"
                  v-for="i in $t('physical.list')"
                  :key="i"
                  v-text="i"
                />
              </v-list-item-group>
            </v-list>
            <v-divider />
            <v-card-actions class="justify-center">
              <v-btn
                href="https://ix42.org/connect"
                color="primary"
                text
                large
                block
                v-t="'connect'"
              />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="text-h3 font-weight-light mb-2 justify-center">
              <v-icon x-large class="mr-2" color="primary"
                >mdi-lan-pending</v-icon
              >
              Free</v-card-title
            >
            <v-card-subtitle class="text-center" v-t="'virtual.title'" />
            <v-divider />
            <v-list dense disabled>
              <v-list-item-group>
                <v-list-item
                  class="justify-center"
                  v-for="i in $t('virtual.list')"
                  :key="i"
                  v-text="i"
                />
              </v-list-item-group>
            </v-list>
            <v-divider />
            <v-card-actions class="justify-center">
              <v-btn
                color="primary"
                text
                large
                block
                href="https://ix42.org/connect"
                v-t="'connect'"
              />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Pricing",
        disabled: true,
        href: "/pricing"
      }
    ]
  })
};
</script>

<i18n>
{
  "en": {
    "title": "Pricing",
    "desc": "Since we are an experimental IX, we do not charge any fees for remote peers established using tunnels. For large-capacity and high-reliability services that are close to commercial use, we charge fees based on port occupancy.",
    "connect": "Connect Now",
    "physical": {
      "title": "1G, 10G, 40G or 100G, physically",
      "list": [
        "Ultra High Speed",
        "Peer locally",
        "High reliability",
        "Redundancy Available"
      ]
    },
    "virtual": {
      "title": "Below 1Gbps, virtual connection.",
      "list": [
        "Low latency requirement",
        "Accessible via VPS",
        "Multiple tunneling protocols",
        "Quick Setup"
      ]
    }
  },
  "zh": {
    "title": "定价",
    "desc": "由于我们是实验性 IX，因此对于使用隧道建立的远程对等方，我们不收取任何费用。 对于接近商业用途的大容量和高可靠性服务，我们根据端口占用率收取费用。",
    "connect": "立即连接",
    "physical": {
      "title": "1G, 10G, 40G 或 100G 的物理连接",
      "list": [
        "极高传输速率",
        "本地的物理连接",
        "较高可用性",
        "可提供冗余"
      ]
    },
    "virtual": {
      "title": "1Gbps 以下的隧道连接",
      "list": [
        "延迟要求宽松",
        "可使用 VPS 接入",
        "多种支持的隧道协议",
        "快速接入"
      ]
    }
  }
}
</i18n>
