<template>
  <b-table
    striped
    bordered
    hover
    :busy="table_loading"
    :fields="f"
    :items="dat"
  >
    <template v-slot:cell(name)="data">
      <a :href="data.item.url">
        {{ data.value }} &nbsp;
        <b-badge pill variant="info">{{ data.item.count }}</b-badge>
      </a>
    </template>
    <template v-slot:cell(policy)="data">
      <b-badge :variant="policy_color(data.value)">{{ data.value }}</b-badge>
    </template>
    <template v-slot:cell(rs)="data">
      <b-icon
        variant="light"
        :class="
          data.value ? 'rounded-circle bg-success' : 'rounded-circle bg-danger'
        "
        :icon="data.value ? 'check2' : 'x'"
      ></b-icon>
    </template>
    <template v-slot:cell(since)="data">{{ parse_date(data.value) }}</template>
    <template v-slot:table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  props: ["table_loading", "dat"],
  data: () => ({
    f: [
      {
        key: "name",
        label: "Network"
      },
      {
        key: "asnum",
        label: "ASN",
        sortable: true
      },
      {
        key: "rs",
        label: "RS Peer",
        sortable: true
      },
      {
        key: "policy",
        label: "Policy"
      },
      {
        key: "since",
        label: "Join At",
        sortable: true
      }
    ]
  }),
  methods: {
    policy_color: function(policy) {
      switch (policy) {
        case "open":
          return "success";
        case "selective":
          return "warning";
        default:
          return "default";
      }
    },
    parse_date: function(date_i) {
      var date = new Date(date_i);
      return (
        date.getUTCFullYear().toString() +
        "/" +
        (date.getUTCMonth() + 1).toString() +
        "/" +
        date.getUTCDate()
      );
    }
  }
};
</script>

<style></style>
