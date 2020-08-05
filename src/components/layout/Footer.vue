<template>
  <v-footer dark padless class="mt-4">
    <v-card flat tile class="primary lighten-1 white--text footer-card">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="8">
            <v-row>
              <v-col cols="12" lg="6">
                <v-card-text class="white--text pt-0">
                  <h3>INTERNET EXCHANGE 42</h3>
                  <br />Internet eXchange 42 is providing interconnections between various networks and autonomous systems.
                </v-card-text>
              </v-col>
              <v-col cols="6" lg="3">
                <v-card-text class="white--text pt-0">
                  <h4>Services</h4>
                  <router-link to="/policy">Policy</router-link>
                  <router-link to="/rs-policy">RS Policy</router-link>
                  <router-link to="/stats">Stats</router-link>
                  <router-link to="/members">Members</router-link>
                  <router-link to="/prices">Prices</router-link>
                </v-card-text>
              </v-col>
              <v-col cols="6" lg="3">
                <v-card-text class="white--text pt-0">
                  <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                  </v-btn>
                  <br/>
                  Email:
                  <a href="mailto:info@ix42.org">info@ix42.org</a>
                  <br />Telegram:
                  <a href="https://t.me/ixp42">@ixp42</a>
                  <br />PeeringDB:
                  <a href="https://www.peeringdb.com/ix/3226">3226</a>
                  <br />IX-F IXP ID:
                  <a href="https://ixpdb.euro-ix.net/en/ixpdb/ixp/878/">878</a>
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