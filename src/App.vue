<template>
  <v-app>
    <v-app-bar app color="primary"dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless class="mt-6">
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading"
            >Suivez nous sur les réseaux sociaux !</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4" dark icon :href="icon.link">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>CFG</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    icons: [
      {
        icon:'mdi-facebook',
        link:'https://www.facebook.com/circuitfelixguichard'
      },
      {
        icon: 'mdi-linkedin',
        link : 'https://www.linkedin.com/company/70403250'
      },
      {
        icon: 'mdi-instagram',
        link:'https://www.instagram.com/cfg_officiel/?hl=fr'
      }
      ],
  }),
};
</script>
