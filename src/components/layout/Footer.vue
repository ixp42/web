<template>
  <v-footer dark padless class="mt-4">
    <v-card flat tile class="primary lighten-1 white--text footer-card">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" lg="5">
                <v-card-text class="white--text pt-0">
                  <v-img
                    alt="IX42 Logo"
                    class="shrink mr-2"
                    contain
                    :src="ix42_logo"
                    transition="scale-transition"
                    width="80"
                  />
                  <div class="text-h5 font-weight-light mb-1" v-t="'title'" />
                  <br />
                  {{ $t("desc") }}
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" lg="3" class="hidden-xs-only">
                <v-card-text class="white--text pt-0">
                  <div class="text-h6 font-weight-light" v-t="'services'" />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/policy"
                    v-t="'services-policy'"
                  />
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/rs-policy"
                    v-t="'services-rs-policy'"
                  />
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/locations"
                    v-t="'locations'"
                  />
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/pricing"
                    v-t="'services-pricing'"
                  />
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-card-text class="white--text pt-0">
                  <div>
                    <v-btn
                      v-for="icon in icons"
                      :key="icon.url"
                      class="mx-1 white--text"
                      icon
                      :href="icon.url"
                    >
                      <v-icon size="24px">{{ icon.icon }}</v-icon>
                    </v-btn>
                  </div>
                  <br />

                  <a
                    class="text-decoration-none white--text"
                    href="mailto:info@ix42.org"
                  >
                    <v-icon small left>mdi-email</v-icon>info@ix42.org
                  </a>
                  <br />
                  <a
                    class="text-decoration-none white--text"
                    href="https://www.peeringdb.com/ix/3226"
                  >
                    <v-icon small left>mdi-information</v-icon>PeeringDB: 3226
                  </a>
                  <br />
                  <a
                    class="text-decoration-none white--text"
                    href="https://ixpdb.euro-ix.net/en/ixpdb/ixp/878/"
                  >
                    <v-icon small left>mdi-information</v-icon>IX-F IXP ID: 878
                  </a>
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-center">
        Copyright &copy; {{ new Date().getFullYear() }} —
        <strong>Internet eXchange 42</strong>. All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import ix42_logo from "@/assets/ix42_logo.png";

export default {
  data: () => ({
    ix42_logo: ix42_logo,
    icons: [
      { icon: "mdi-telegram", url: "https://t.me/ixp42" },
      { icon: "mdi-twitter", url: "" },
      { icon: "mdi-email", url: "mailto:info@ix42.org" }
    ]
  })
};
</script>

<style lang="scss">
.footer-card {
  width: 100vw;
}
</style>

<i18n>
{
  "en": {
    "title": "Internet eXchange 42",
    "desc": "Internet eXchange 42 is providing interconnections between various networks and autonomous systems.",
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
    "title": "Internet eXchange 42",
    "desc": "Internet eXchange 42 为各种网络和自治系统之间提供互联。",
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
