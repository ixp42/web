<template>
  <section id="home-head" class="primary">
    <v-responsive class="mx-auto pa-6 pt-12 white--text">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-responsive class="overflow-visible">
              <div class="text-h3 font-weight-light mb-4">
                Affordable & Efficient
                <br />Interconnections
              </div>
              <p class="font-weight-light">
                Internet eXchange 42 provides affordable and efficient
                interconnection services and operates several carrier and data
                center-neutral Internet Exchanges.
              </p>

              <div
                class="d-flex flex-wrap justify-left justify-md-start align-center mx-n2"
              >
                <v-btn light class="primary--text ma-2" elevation="6" x-large>
                  <v-icon left>mdi-transit-connection-variant</v-icon>Get
                  Connected
                </v-btn>
                <v-btn dark outlined class="ma-2" elevation="6" x-large>
                  <v-icon left>mdi-account-multiple</v-icon>About Us
                </v-btn>
                <p class="font-italic font-weight-light">
                  Currently support Las Vegas and Singapore.
                </p>
              </div>
            </v-responsive>
          </v-col>
          <v-spacer />
          <v-col class="hidden-md-and-down" cols="12" lg="6">
            <v-img :src="global_map" max-width="100%" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>

<script>
import global_map from "@/assets/map.svg";

export default {
  data: () => ({
    global_map: global_map
  })
};
</script>

<style></style>
