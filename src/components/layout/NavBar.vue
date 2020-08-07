<template>
  <v-app-bar app fixed color="primary" dark elevate-on-scroll>
    <div class="container d-flex align-center pa-0">
      <v-img
        @click="$router.push('/')"
        alt="IX42 Logo"
        class="shrink mr-2"
        contain
        :src="ix42_logo"
        transition="scale-transition"
        width="80"
      />

      <v-toolbar-title @click="$router.push('/')" class="hidden-xs-only"
        >Internet eXchange 42</v-toolbar-title
      >

      <v-toolbar-title @click="$router.push('/')" class="hidden-sm-and-up"
        >IX42</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text dark class="hidden-xs-only" href="https://ix42.org/connect">
        <span class="subtitle-1 font-weight-light text-capitalize">{{
          $t("connect")
        }}</span>
      </v-btn>
      <v-btn text dark to="/locations">
        <span class="subtitle-1 font-weight-light text-capitalize">{{
          $t("locations")
        }}</span>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            <span class="subtitle-1 font-weight-light text-capitalize">{{
              $t("services")
            }}</span>

            <v-icon right dark>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/policy">
            <v-list-item-title>{{ $t("services-policy") }}</v-list-item-title>
          </v-list-item>
          <v-list-item to="/rs-policy">
            <v-list-item-title>{{
              $t("services-rs-policy")
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item to="/pricing">
            <v-list-item-title>{{ $t("services-pricing") }}</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dn42">
            <v-list-item-title>{{ $t("services-dn42") }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        text
        dark
        class="hidden-sm-and-down"
        href="https://portal.ix42.org"
      >
        <span class="subtitle-1 font-weight-light text-capitalize">{{
          $t("portal")
        }}</span>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark class="hidden-xs-only" v-bind="attrs" v-on="on">
            <v-icon left dark>mdi-translate</v-icon>
            <span class="subtitle-1 font-weight-light text-capitalize">{{
              $t("lang")
            }}</span>

            <v-icon right dark>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="$root.$i18n.locale = 'en'">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$root.$i18n.locale = 'zh'">
            <v-list-item-title>简体中文</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import ix42_logo from "@/assets/ix42_logo.png";

export default {
  data: () => ({
    ix42_logo: ix42_logo
  })
};
</script>

<i18n>
{
  "en": {
    "connect": "Connect",
    "locations": "Locations",
    "services": "Services",
    "services-policy": "Policy",
    "services-rs-policy": "RS Policy",
    "services-pricing": "Pricing",
    "services-dn42": "DN42",
    "portal": "Portal",
    "lang": "English"
  },
  "zh": {
    "connect": "接入",
    "locations": "位置",
    "services": "服务",
    "services-policy": "政策",
    "services-rs-policy": "RS策略",
    "services-pricing": "定价",
    "services-dn42": "DN42",
    "portal": "客户中心",
    "lang": "中文"
  }
}
</i18n>
