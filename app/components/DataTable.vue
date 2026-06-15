<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "#imports";
import type { SortItem } from "vuetify/lib/components/VDataTable/composables/sort.mjs";
import { RSPolicy, IXSupport, useAppStore } from "~/stores/app";
const { t } = useI18n();
const store = useAppStore();

const headers = computed(() => [
  { title: "ASN", key: "rs.asn", sortable: true },
  { title: t("table.headers.ipv4"), key: "rs.ipv4" },
  { title: t("table.headers.ipv6"), key: "rs.ipv6" },
  { title: t("table.headers.port"), key: "rs.port" },
  { title: t("table.headers.policy"), key: "rs.policy", sortable: true },
  { title: t("table.headers.lg"), key: "rs.lg" },
  { title: t("table.headers.desc"), key: "description" },
]);

const getPolicyColor = (policy: RSPolicy | string | undefined) => {
  if (!policy) return "grey";
  const colors: Record<string, string> = {
    open_auto: "success",
    open_manual: "info",
    ask: "warning",
    closed: "error",
  };
  return colors[policy] || "grey";
};

const getSupportColor = (support: IXSupport | string) => {
  const colors: Record<string, string> = {
    vlan: "success",
    allowed: "info",
    dn42: "purple",
  };
  return colors[support] || "grey";
};

const groupby: SortItem[] = [
  {
    key: "ix",
    order: "asc",
  },
];
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="store.ixNodes"
    :group-by="groupby"
    :open-all="true"
    items-per-page="100"
    class="bg-transparent"
    hover
  >
    <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
      <tr>
        <td
          :colspan="columns.length"
          @click="toggleGroup(item)"
          class="cursor-pointer font-weight-bold"
        >
          <div class="d-flex align-center">
            <v-icon
              :icon="
                isGroupOpen(item) ? 'mdi-chevron-down' : 'mdi-chevron-right'
              "
              size="small"
              class="mr-2"
            />

            <a
              v-if="item.items[0].raw.ixUrl"
              :href="item.items[0].raw.ixUrl"
              target="_blank"
              @click.stop
              class="text-decoration-none text-primary d-flex align-center mr-2"
            >
              {{ item.value }}
              <v-icon size="small" class="ml-1">mdi-open-in-new</v-icon>
            </a>
            <span v-else class="mr-2">{{ item.value }}</span>

            <v-chip
              rounded
              v-if="item.items[0].raw.ixSupport"
              size="small"
              :color="getSupportColor(item.items[0].raw.ixSupport)"
              class="text-white mr-2"
            >
              {{ $t(`support.${item.items[0].raw.ixSupport}`) }}
            </v-chip>

            <!-- Count Tag -->
            <v-chip
              rounded
              size="small"
              color="primary"
              class="font-weight-bold"
              v-if="item.items[0].raw.rs"
            >
              {{ item.items.length }}
            </v-chip>
            <v-spacer />
            <v-chip v-if="item.items[0].raw.ixDescription" variant="text">
              {{ item.items[0].raw.ixDescription }}
            </v-chip>
          </div>
        </td>
      </tr>
    </template>

    <template #[`item.rs.ipv4`]="{ item }">
      {{ item.rs?.ipv4 || "-" }}
    </template>

    <template #[`item.rs.ipv6`]="{ item }">
      {{ item.rs?.ipv6 || "-" }}
    </template>

    <template #[`item.rs.port`]="{ item }">
      <v-chip
        size="small"
        variant="tonal"
        :color="item.rs?.port === 179 ? 'grey-darken-2' : 'deep-purple'"
        v-if="item.rs"
        class="font-weight-medium"
      >
        {{ item.rs.port || 179 }}
        {{
          item.rs.port === 179 || !item.rs.port
            ? ` (${$t("common.standard")})`
            : ""
        }}
      </v-chip>
      <template v-else> - </template>
    </template>

    <template #[`item.rs.policy`]="{ item }">
      <v-chip
        size="small"
        :color="getPolicyColor(item.rs?.policy)"
        variant="tonal"
        class="font-weight-bold text-white"
        v-if="item.rs"
      >
        {{ $t(`policy.${item.rs?.policy}`) }}
      </v-chip>
      <template v-else> - </template>
    </template>

    <template #[`item.rs.lg`]="{ item }">
      <v-btn
        v-if="item.rs?.lg"
        :href="item.rs?.lg"
        target="_blank"
        variant="tonal"
        color="primary"
        size="small"
        rounded="pill"
        prepend-icon="mdi-open-in-new"
      >
        LG
      </v-btn>
      <span v-else class="text-grey">-</span>
    </template>

    <template #[`item.description`]="{ item }">
      <span class="text-body-2 text-medium-emphasis">{{
        item.description || "-"
      }}</span>
    </template>
  </v-data-table>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
