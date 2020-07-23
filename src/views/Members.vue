<template>
  <div class="stats">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>IX42 Members</h2>
            <h3>{{ memb["2"].name }}</h3>
            <b-table
              striped
              bordered
              hover
              :busy="table_loading"
              :fields="['name', 'asnum', 'policy', 'since']"
              :items="memb['2'].members"
            >
              <template v-slot:cell(name)="data">
                <a :href="data.item.url"
                  >{{ data.value }} &nbsp;
                  <b-badge pill variant="info">{{
                    data.item.count
                  }}</b-badge></a
                >
              </template>
              <template v-slot:cell(policy)="data">
                <b-badge :variant="policy_color(data.value)">{{
                  data.value
                }}</b-badge>
              </template>
              <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
            </b-table>
            <hr />
            <h3>{{ memb["1"].name }}</h3>
            <b-table
              striped
              bordered
              hover
              :busy="table_loading"
              :fields="['name', 'asnum', 'policy', 'since']"
              :items="memb['1'].members"
            >
              <template v-slot:cell(name)="data">
                <a :href="data.item.url"
                  >{{ data.value }} &nbsp;
                  <b-badge pill variant="info">{{
                    data.item.count
                  }}</b-badge></a
                >
              </template>
              <template v-slot:cell(policy)="data">
                <b-badge :variant="policy_color(data.value)">{{
                  data.value
                }}</b-badge>
              </template>
              <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Any Questions ?</h2>
            <p class="lead">
              You can inquiry our tech support.
            </p>
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
export default {
  data: () => ({
    table_loading: true,
    memb: {
      "1": {
        name: "DN42",
        members: []
      },
      "2": {
        name: "Clearnet",
        members: []
      }
    }
  }),
  methods: {
    toggle_loading: function(ld) {
      this.table_loading = ld;
    },
    policy_color: function(policy) {
      switch (policy) {
        case "open":
          return "success";
        case "selective":
          return "warning";
        default:
          return "default";
      }
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
