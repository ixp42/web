<template>
  <div class="members">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-4 text-center">
        Members for {{ region.name }}
      </div>
      <v-data-table
        :headers="memheaders"
        single-expand
        disable-pagination
        :loading="loading"
        hide-default-footer
        show-expand
        :expanded.sync="expanded"
        item-key="asnum"
        :items="ixpmembers"
        :items-per-page="20"
      >
        <template v-slot:item.name="{ item }">
          {{ item.name }}
          <v-chip
            class="ml-2"
            small
            color="orange"
            dark
            v-if="region.sponsors.includes(parseInt(item.asnum))"
            >{{ $t("sponsor") }}</v-chip
          >
        </template>
        <template v-slot:item.peering_policy="{ item }">
          <v-chip small :color="policy_color(item.peering_policy)" dark>{{
            item.peering_policy
          }}</v-chip>
        </template>
        <template v-slot:item.status="{ item }">
          <v-icon :color="getstatus(item).color">{{
            getstatus(item).icon
          }}</v-icon>
        </template>

        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <DetailView :item="getconn(item)" :asn="item.asnum" />
          </td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script>
import regions from "@/data/regions.json";
import DetailView from "@/components/Members/Detail";

import { getIXPMember } from "@/utils/IXF.js";

export default {
  methods: {
    getconn: function(mb) {
      return mb.connection_list.find(conn => {
        return conn.ixp_id === this.region.ixpid;
      });
    },
    getstatus: function(mb) {
      var conn = mb.connection_list.find(conn => {
        return conn.ixp_id === this.region.ixpid;
      });
      switch (conn.state) {
        case "active":
          return { color: "success", icon: "mdi-check" };
        default:
          return { color: "default", icon: "mdi-question" };
      }
    },
    policy_color: function(pol) {
      switch (pol) {
        case "open":
          return "success";
        default:
          return "default";
      }
    }
  },
  mounted: function() {
    this.region = regions.find(obj => {
      return obj.code === this.$route.params.loc;
    });
    this.$axios({
      method: "get",
      url: "https://export.ix42.org/members.json"
    }).then(response => {
      this.ixpmembers = getIXPMember(response.data, this.region.ixpid);
      this.loading = false;
    });
  },
  data: () => ({
    ixpmembers: [],
    expanded: [],
    memheaders: [
      {
        text: "Name",
        value: "name"
      },
      {
        text: "ASN",
        value: "asnum"
      },
      {
        text: "Policy",
        value: "peering_policy"
      },
      { text: "Status", value: "status" },
      { text: "", value: "data-table-expand" }
    ],
    region: {},
    loading: true,
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Members",
        disabled: true
      }
    ]
  }),
  components: {
    DetailView
  }
};
</script>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "sponsor": "Sponsor"
  },
  "zh": {
    "sponsor": "赞助者"
  }
}
</i18n>
