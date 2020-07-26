<template>
  <div class="stats">
    <section>
      <div class="container">
        <div class="row">
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
              <b
                >Attention: DN42 Peers are not members. All IX42 members must
                have public ASN and prefies annonced to IX42.</b
              >
            </p>
            <h3>{{ memb["1"].name }}</h3>
            <p>{{ memb["1"].descr }}</p>
            <IXPTable :table_loading="table_loading" :dat="memb['1'].members" />
            <!-- <h3>{{ memb["1"].name }}</h3>
            <p>{{ memb["1"].descr }}</p>
            <IXPTable :table_loading="table_loading" :dat="memb['1'].members" /> -->
          </div>
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
    memb: {
      "1": {
        name: "DN42 Las Vegas",
        descr:
          "Here is the list of peers participate in IX42 Las Vegas for DN42, a distributed and experimental network.",
        members: []
      },
      "2": {
        name: "IX42 Las Vegas",
        descr: "Here is the list of members participate in IX42 Las Vegas.",
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
  mounted: function() {
    this.$axios({
      method: "get",
      url:
        "https://portal.ix42.org/api/v4/member-export/ixf/1.0?ignore_missing_ixfid=1"
    })
      .then(response => {
        response.data.member_list.forEach(mb => {
          mb.connection_list.forEach(conn => {
            conn.vlan_list.forEach(vl => {
              var mbobj = {
                name: mb.name,
                url: mb.url,
                asnum: mb.asnum,
                policy: mb.peering_policy,
                since: mb.member_since,
                rs: vl.ipv6.routeserver,
                count: 1
              };
              if (
                this.memb[vl.vlan_id.toString()].members.findIndex(
                  x => x.asnum == mb.asnum
                ) == -1 &&
                mb.member_type != "ixp"
              ) {
                this.memb[vl.vlan_id.toString()].members.push(mbobj);
              } else if (mb.member_type != "ixp") {
                this.memb[vl.vlan_id.toString()].members[
                  this.memb[vl.vlan_id.toString()].members.findIndex(
                    x => x.asnum == mb.asnum
                  )
                ].count++;
              }
            });
          });
        });
        this.toggle_loading(false);
      })
      .catch(error => console.log(error, "error"));
  }
};
</script>

<style scoped>
section {
  padding: 60px 0;
}
</style>
