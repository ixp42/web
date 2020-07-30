<template>
  <div class="stats">
    <section>
      <div class="container">
        <div class="row" v-if="!error">
          <div class="col-lg-10 mx-auto" v-for="mm in pops" :key="mm.name">
            <h3>{{ mm.name }}</h3>
            <p>{{ mm.descr }}</p>
            <IXPTable :table_loading="table_loading" :dat="mm.members" />
          </div>
        </div>
        <div class="alert alert-danger" role="alert" v-else>
          Something went wrong.
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Any Questions ?</h2>
            <p class="lead">You can inquiry our tech support.</p>
            <div class="col-md-4 mb-5">
              <address>
                <abbr title="Email">E:</abbr>
                <a href="mailto:tech@ix42.org">tech@ix42.org</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IXPTable from "@/components/Members/IXPTable";

export default {
  data: () => ({
    table_loading: true,
    error: null,
    pops: {
      "2": {
        name: "IX42 Las Vegas",
        descr: "Here is the list of members participate in IX42 Las Vegas.",
        members: []
      },
      "3": {
        name: "IX42 Singapore",
        descr: "Here is the list of members participate in IX42 Singapore.",
        members: []
      }
    }
  }),
  components: { IXPTable },
  methods: {
    toggle_loading: function(ld) {
      this.table_loading = ld;
    }
  },
  async mounted() {
    try {
      const res = await this.$axios({
        method: "get",
        url:
          "https://portal.ix42.org/api/v4/member-export/ixf/1.0?ignore_missing_ixfid=1"
      });

      for (const member of res.data.member_list) {
        for (const conn of member.connection_list) {
          for (const vl of conn.vlan_list) {
            const vlan_id = vl.vlan_id.toString();
            if (this.pops[vlan_id]) {
              const mbobj = {
                name: member.name,
                url: member.url,
                asnum: member.asnum,
                policy: member.peering_policy,
                since: member.member_since,
                rs: vl.ipv6.routeserver,
                count: 1
              };
              const memberIndex = this.pops[vlan_id].members.findIndex(
                x => x.asnum === member.asnum
              );

              if (memberIndex === -1 && member.member_type !== "ixp") {
                this.pops[vl.vlan_id.toString()].members.push(mbobj);
              } else if (member.member_type !== "ixp") {
                this.pops[vlan_id].members[memberIndex].count++;
              }
            }
          }
        }
      }

      this.toggle_loading(false);
    } catch (e) {
      this.error = e;
      console.error(e);
    }
  }
};
</script>

<style scoped>
section {
  padding: 60px 0;
}
</style>
