<template>
    <v-container >
        <v-card class="mx-auto" max-width="800">
          <v-btn to="/">
            <v-icon>mdi-arrow-left</v-icon>
            Retour
          </v-btn>
          <v-btn @click="init()">
            <v-icon>mdi-refresh</v-icon>
            Actualiser
          </v-btn>
          <v-img
          class="white--text align-end"
          max-height="350px"
          src="../assets/ada.png"
        >
        </v-img>
            <v-data-table
            :headers="headers"
            :items="results"
            :items-per-page="20"
            class="elevation-1"
          ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>

import apiChrono from "../service/chrono"

export default {
    name:"result",

    mounted() {
      this.init();
    },

    data () {
      return {
        headers: [
          {
            text: 'Classement',
            align: 'start',
            sortable: false,
            value: 'Classement',
          },
          { text: 'Pilote', value: 'Pilote' },
          { text: 'Dossard', value: 'Dossard' },
          { text: 'Voiture', value: 'Voiture' },
          { text: 'Meilleur Temps', value: 'Meilleur Temps' },
          { text: 'Au Tour', value: 'Au tour' },
          { text: 'Différence', value: 'Dif'},
        ],
        results: [],
      }
    },

    methods :  {
      async init() {
        apiChrono.getClassement()
        .then(res=> this.results = res.data)
        .catch(err => console.log(err));
      }
    }
}
</script>