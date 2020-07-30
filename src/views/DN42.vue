<template>
  <div class="stats">
    <section>
      <div class="container">
        <div class="row" v-if="!error">
          <div class="col-lg-10 mx-auto">
            <h2>IX42 for DN42</h2>
            <p>
              IX42 have multiple locations supporting DN42 (Distributed Network
              42), an experimental network. Internet peers can request for a
              cross connect to the DN42 switch.
            </p>
            <p>
              For more information, please read the
              <a href="https://wiki.dn42.dev">wiki</a> page.
            </p>
            <p>
              <b>
                Attention: DN42 Peers are not members. All IX42 members must
                have public ASN and prefies annonced to IX42.
              </b>
            </p>
            <div v-for="mm in pops" :key="mm.name">
              <h3>{{ mm.name }}</h3>
              <p>{{ mm.descr }}</p>
              <IXPTable :table_loading="table_loading" :dat="mm.members" />
            </div>
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
      "1": {
        name: "DN42 Las Vegas",
        descr:
          "Here is the list of peers participate in IX42 Las Vegas for DN42, a distributed and experimental network.",
        members: []
      },
      "6": {
        name: "DN42 Singapore",
        descr:
          "Here is the list of peers participate in IX42 Singapore for DN42, a distributed and experimental network.",
        members: []
      }
    }
  }),
  components: { IXPTable },
  methods: {
    toggle_loading(ld) {
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
