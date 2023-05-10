<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../assets/logo.svg"
              transition="scale-transition"
              width="100"
            />
          </div>
            <v-toolbar-title>Vos chronos</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                dark
                text
                color="red"
                @click="$emit('closeModal')"
              >
                Fermer
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-actions class="justify-center">
          <v-btn color="success" @click="$emit('refreshResult')">
            <v-icon>mdi-refresh</v-icon>
            Actualiser
          </v-btn>
        </v-card-actions>

          <v-card-title class="justify-center primary--text" >Temps de <strong class="ml-1"> {{ pilote['Nom Prénom'] }} </strong></v-card-title>
          <v-card-subtitle class="text-center">
            sur {{ pilote.Voiture }} avec le dossard n° {{ pilote.dossard }}
          </v-card-subtitle>

          <v-card-text class="text-center primary--text">
           Le meilleur temps du pilote est de <strong> {{ pilote.Min }} </strong> au tour n°  <strong>{{ pilote.AuTour }}</strong>
          </v-card-text>

         
          <v-container >
            <v-card class="mx-auto" max-width="800">
                <v-data-table
                :headers="headers"
                :items="pilote.times"
                :items-per-page="99"
                class="elevation-1"
              ></v-data-table>
            </v-card>
        </v-container>

        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
  export default {

    props: {
      dialog : {
        type: Boolean,
        default: false
      },
      pilote : {
        type: Object,
        default : {
          "Nom Prénom" : '',
          "Voiture" : '',
          "dossard" : 0,
          "times" : []
        }
      }
    },

    data () {
      return {
        headers: [
          {
            text: 'Tour N°',
            align: 'start',
            sortable: false,
            value: 'Tour',
          },
          { text: 'Vitesse Moy', value: 'Vitesse Moy' },
          { text: 'Temp', value: 'Temp au tour' },
        ],
      }
    },
  }
</script>