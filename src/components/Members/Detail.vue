<template>
  <div class="mt-3 mb-6">
    <v-row>
      <v-col cols="12" lg="8">
        <div class="text-h6 font-weight-light" v-t="'addr'" />
        <v-row v-for="vlan in item.vlan_list" :key="vlan.vlan_id">
          <v-col cols="12" lg="6" v-if="'ipv4' in vlan">
            <v-card>
              <v-card-text>
                IPv4
                <v-card-title>
                  {{ vlan.ipv4.address }}
                  <v-btn icon class="ml-4" v-clipboard:copy="vlan.ipv4.address">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-card-title>
                {{ $t("rs") }}:
                <v-chip
                  x-small
                  :color="vlan.ipv4.routeserver ? 'success' : 'warning'"
                  >{{ vlan.ipv4.routeserver ? "Yes" : "No" }}</v-chip
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6" v-if="'ipv6' in vlan">
            <v-card>
              <v-card-text>
                IPv6
                <v-card-title>
                  {{ vlan.ipv6.address }}
                  <v-btn icon class="ml-4" v-clipboard:copy="vlan.ipv6.address">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-card-title>
                {{ $t("rs") }}:
                <v-chip
                  x-small
                  :color="vlan.ipv6.routeserver ? 'success' : 'warning'"
                  >{{ vlan.ipv6.routeserver ? "Yes" : "No" }}</v-chip
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="4">
        <div class="text-h6 font-weight-light" v-t="'if'" />

        <v-row>
          <v-col v-for="iface in item.if_list" :key="iface.switch_id">
            <v-chip color="teal" text-color="white">
              <v-avatar left>
                <v-icon>mdi-ethernet</v-icon>
              </v-avatar>
              {{ iface_speed(iface.if_speed) }}
            </v-chip>
          </v-col>
        </v-row>

        <div class="text-h6 font-weight-light mb-2" v-t="'links'" />
        <v-btn
          small
          outlined
          color="primary"
          :href="'https://www.peeringdb.com/asn/' + asn"
        >
          <v-icon>mdi-database</v-icon>PeeringDB
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["item", "asn"],
  methods: {
    iface_speed: function(val) {
      val = parseInt(val);
      if (val >= 1000) {
        return (val / 1000).toString() + "Gbps";
      } else {
        return val.toString() + "Mbps";
      }
    }
  }
};
</script>

<i18n>
{
  "en": {
    "addr": "Addresses",
    "if": "Interfaces",
    "links": "Links",
    "rs": "RS Peer"
  },
  "zh": {
    "addr": "地址",
    "if": "接口",
    "links": "链接",
    "rs": "RS 对等"
  }
}
</i18n>
