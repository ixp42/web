<template>
  <v-footer class="mt-4 pa-0 border-t">
    <v-card flat tile class="bg-surface w-100 rounded-0">
      <v-card-text>
        <v-container max-width="1600">
          <v-row justify="space-between">
            <v-col cols="12" md="8">
              <v-row justify="space-between">
                <v-col cols="12" lg="5">
                  <div class="d-flex align-center mb-4">
                    <v-icon
                      icon="mdi-hexagon-multiple"
                      size="48"
                      color="primary"
                      class="mr-2"
                    />
                    <div class="text-title-large font-weight-bold text-primary">
                      Internet eXchange 42
                    </div>
                  </div>
                  <div class="text-body-1 text-medium-emphasis">
                    {{ $t("footer.description") }}
                  </div>
                </v-col>
                <v-col
                  cols="12"
                  md="5"
                  lg="4"
                  class="d-flex flex-column align-start mt-4 mt-md-0"
                >
                  <v-btn
                    href="https://t.me/ixp42"
                    prepend-icon="mdi-send-variant"
                    text="t.me/ixp42"
                    variant="text"
                    density="compact"
                    color="primary"
                  />
                  <v-btn
                    href="mailto:info@ix42.org"
                    prepend-icon="mdi-email"
                    text="info@ix42.org"
                    variant="text"
                    density="compact"
                    color="primary"
                  />
                  <v-btn
                    href="https://github.com/ixp42"
                    prepend-icon="mdi-github"
                    text="ixp42"
                    variant="text"
                    density="compact"
                    color="primary"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-center text-medium-emphasis py-4">
        Copyright &copy; {{ new Date().getFullYear() }} —
        <strong>Internet eXchange 42</strong>. {{ $t("footer.rights") }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>
