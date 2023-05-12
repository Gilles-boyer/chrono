<template>
  <v-container > 
    <v-btn to="/" class="mb-3">
      <v-icon class="mr-2">mdi-arrow-left</v-icon>
      Retour
    </v-btn>
    <v-btn @click="init()" class="mb-3 ml-2">
      <v-icon>mdi-refresh</v-icon>
      Actualiser
    </v-btn>
    <v-card class="mx-auto mb-2" max-width="800" v-for="group in list_pilotes" :key="group.name">
      <v-card-title primary-title  class="justify-center primary--text">
        {{ group.name }}
      </v-card-title>
      <v-data-table
      :headers="headers"
      :items="group.pilote"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
   </v-card>
  </v-container>
</template>

<script>
import data from "../assets/data.json"

export default {
  mounted() {
      this.init();
  },

  data: () => ({
    list_pilotes : [],
    data: null,
    bdd: [],
    headers: [
      {
        text: 'Pilote',
        align: 'start',
        sortable: false,
        value: 'Pilote',
      },
      { text: 'Dossard', value: 'Dossard', sortable: false, },
    ],
  }),

  methods: {
    init() {
      Object.assign(this.bdd, data);
      // git.getGroupe().then(res => {
      //   this.bdd = res.data;
      //   
      // })
      this.createGroup();
    },

    

    defineNbrGroup(nomb_voitures) {
      var nomb_groupe = 0;
      if (nomb_voitures < 10) {
        nomb_groupe = 2;
      } else if (nomb_voitures <= 15) {
        nomb_groupe = 3;
      } else if (nomb_voitures <= 20) {
        nomb_groupe = 4;
      } else if (nomb_voitures <= 30) {
        nomb_groupe = 5;
      } else if (nomb_voitures <= 36) {
        nomb_groupe = 6;
      } else if (nomb_voitures <= 42) {
        nomb_groupe = 7;
      } else if (nomb_voitures <= 50) {
        nomb_groupe = 8;
      } else if (nomb_voitures > 50) {
        nomb_groupe = 9;
      }
      return nomb_groupe;
    },

    createGroup() {
      var nomb_voitures = this.bdd.length;
      var nomb_groupe = this.defineNbrGroup(nomb_voitures);
      var classement = [];
      var modulo = nomb_voitures % nomb_groupe
      var nbr_voiture_par_group = parseInt(nomb_voitures/nomb_groupe);

      for (let index = 1; index <= nomb_groupe; index++) {
        var pilotes = [];
        if(modulo > 0) {
          modulo --
          for (let i = 0; i < (nbr_voiture_par_group + 1); i++) {
            pilotes.push(this.bdd[0]);
            this.bdd.splice(0,1);
          } 
        } else {
          for (let i = 0; i < (nbr_voiture_par_group); i++) {
            pilotes.push(this.bdd[0]);
            this.bdd.splice(0,1);
          } 
        }
        classement.push({
          name: "Groupe " + index,
          pilote: pilotes
        })
      }
      //console.log(classement);
      this.list_pilotes = classement;
    }
  },
};
</script>
