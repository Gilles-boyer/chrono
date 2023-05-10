<template>
    <v-container >
        <v-btn to="/">
            <v-icon>mdi-arrow-left</v-icon>
            Retour
          </v-btn>
          <v-btn @click="init()">
            <v-icon>mdi-refresh</v-icon>
            Actualiser
          </v-btn>
        <v-card class="mx-auto" max-width="800" v-for="result in results" :key="result.name">
            <v-card-title primary-title  class="justify-center primary--text">
                {{ result.name }}
              </v-card-title>
            <v-data-table
            :headers="headers"
            :items="result.data"
            :items-per-page="20"
            class="elevation-1"
          ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>

import apiChrono from "../service/chrono"

export default {
    name:"category",

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
        apiChrono.getClassementCat()
        .then(res=>{
            var traction = res.data.filter(function(result) {
                return result.Catégorie == "traction";
            })
            var propulsion = res.data.filter(function(result) {
                return result.Catégorie == "propulsion";
            })
            var x4 = res.data.filter(function(result) {
                return result.Catégorie == "4x4";
            })

            this.results.push({
                name:"Traction",
                data: traction
            })
            this.results.push({
                name:"Propulsion",
                data: propulsion
            })
            this.results.push({
                name:"4x4",
                data: x4
            })
        })
        .catch(err => console.log(err));
      }
    }
}
</script>