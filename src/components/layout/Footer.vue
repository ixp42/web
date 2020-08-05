<template>
  <v-footer dark padless class="mt-4">
    <v-card flat tile class="primary lighten-1 white--text footer-card">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="8">
            <v-row>
              <v-col cols="12" lg="5">
                <v-card-text class="white--text pt-0">
                  <div class="text-h5 font-weight-light mb-1">
                    Internet eXchange 42
                  </div>
                  <br />Internet eXchange 42 is providing interconnections
                  between various networks and autonomous systems.
                </v-card-text>
              </v-col>
              <v-col cols="6" lg="3">
                <v-card-text class="white--text pt-0">
                  <div class="text-h6 font-weight-light">Services</div>
                  <router-link
                    class="text-decoration-none white--text"
                    to="/policy"
                    >Policy</router-link
                  >
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/rs-policy"
                    >RS Policy</router-link
                  >
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/stats"
                    >Stats</router-link
                  >
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/members"
                    >Members</router-link
                  >
                  <br />
                  <router-link
                    class="text-decoration-none white--text"
                    to="/prices"
                    >Prices</router-link
                  >
                </v-card-text>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card-text class="white--text pt-0">
                  <div>
                    <v-btn
                      v-for="icon in icons"
                      :key="icon"
                      class="mx-1 white--text"
                      icon
                    >
                      <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                  </div>
                  <br />

                  <a
                    class="text-decoration-none white--text"
                    href="mailto:info@ix42.org"
                  >
                    <v-icon left>mdi-email</v-icon>
                    info@ix42.org</a
                  >
                  <br />
                  <a
                    class="text-decoration-none white--text"
                    href="https://www.peeringdb.com/ix/3226"
                  >
                    <v-icon left>mdi-information</v-icon>
                    PeeringDB: 3226</a
                  >
                  <br />
                  <a
                    class="text-decoration-none white--text"
                    href="https://ixpdb.euro-ix.net/en/ixpdb/ixp/878/"
                  >
                    <v-icon left>mdi-information</v-icon>
                    IX-F IXP ID: 878</a
                  >
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
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style lang="scss">
.footer-card {
  width: 100vw;
}
</style>
