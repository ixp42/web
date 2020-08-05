<template>
  <v-app-bar app fixed color="primary" dark elevate-on-scroll>
    <div class="container d-flex align-center pa-0">
      <v-img
        alt="IX42 Logo"
        class="shrink mr-2"
        contain
        :src="ix42_logo"
        transition="scale-transition"
        width="80"
      />

      <v-toolbar-title class="hidden-xs-only"
        >Internet eXchange 42</v-toolbar-title
      >

      <v-toolbar-title class="hidden-sm-and-up">IX42</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text dark class="hidden-sm-and-down">
        <span class="subtitle-1 font-weight-light text-capitalize"
          >Connect</span
        >
      </v-btn>
      <v-btn text dark>
        <span class="subtitle-1 font-weight-light text-capitalize"
          >Members</span
        >
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark class="hidden-xs-only" v-bind="attrs" v-on="on">
            <span class="subtitle-1 font-weight-light text-capitalize"
              >Services</span
            >

            <v-icon right dark>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>Policy</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>RS Policy</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>Stats</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>DN42</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text dark class="hidden-sm-and-down">
        <span class="subtitle-1 font-weight-light text-capitalize">Portal</span>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark class="hidden-xs-only" v-bind="attrs" v-on="on">
            <v-icon left dark>mdi-translate</v-icon>
            <span class="subtitle-1 font-weight-light text-capitalize"
              >English</span
            >

            <v-icon right dark>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="
              {
              }
            "
          >
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              {
              }
            "
          >
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

<style></style>
