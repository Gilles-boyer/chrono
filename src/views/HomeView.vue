<template>
  <v-container class="mt-6">
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>

    <DialogsResult
      :pilote="piloteSelect"
      :dialog="dialogResult"
      @closeModal="dialogResult = false"
      @refreshResult="actualiser()"
    />

    <v-row align="center" justify="center" class="mb-5 mx-auto"  justify-content="center" >
      <v-col class="d-flex align-center justify-center">
        <v-btn color="primary" class="white--text" to="/result">
          Voir le Classement général
        </v-btn>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-btn color="primary" class="white--text" to="/result-by-cat">
          Voir le Classement par Catégorie
        </v-btn>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-btn color="primary" class="white--text" to="/endurance">
          Voir le Classement pour l'endurance
        </v-btn>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-btn color="primary" class="white--text" to="/groupe">
          Voir les groupes
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mx-auto" max-width="800">
      <v-card-title class="justify-center font-weight-bold primary--text"
      >Voir vos chronos tour par tour</v-card-title>

      <v-img
        class="white--text align-end"
        max-height="400px"
        src="../assets/ada.png"
      >
      </v-img>
      <v-card-title class="justify-center font-weight-bold primary--text"
        >Le 14 mai 2023 au Circuit Felix Guichard</v-card-title
      >
      <v-card-subtitle class="pb-0 text-center">
        Profitez de votre chrono en direct</v-card-subtitle
      >

      <v-card-text class="text--primary text-center">
        Saisissez votre N° de dossard pour voir votre temps:
      </v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-text-field
              v-model="dossard"
              :rules="dossardRules"
              type="number"
              label="Dossard"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>

      <v-card-actions class="justify-center">
        <v-btn
          :disabled="!valid"
          color="green"
          class="white--text"
          @click="openResult()"
        >
          Voir les Résultats
        </v-btn>
      </v-card-actions>

      <v-row justify="space-between" align="center" class="mt-3">
        <v-col>
          <v-img
            class="mx-auto"
            alt="Vuetify Logo"
            contain
            src="data:image/png;base64,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"
            transition="scale-transition"
            width="150"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import apiChrono from "../service/chrono";
import DialogsResult from "../components/DialogsResult.vue";

export default {
  name: "Home",

  mounted() {
    this.init();
    this.refreshData();
  },
  components: {
    DialogsResult,
  },

  data: () => ({
    pilotes: [],
    dossard: null,
    snackbar: false,
    text: `Le dossard saisie n'existe pas !`,
    valid: false,
    dossardRules: [
      (v) => !!v || "un numéro de dossard est requis",
      (v) => !Number.isInteger(v) || "ce champ autorise que des nombres",
    ],
    piloteSelect: {
      "Nom Prénom": "",
      Voiture: "",
      dossard: 0,
      times: [],
    },
    dialogResult: false,
  }),

  methods: {
    async init() {
      apiChrono
        .getPilote()
        .then((res) => {
          this.pilotes = res.data;
          apiChrono
            .getChrono()
            .then((result) => {
              res.data.forEach((element, index) => {
                this.pilotes[index].times = [];
                this.pilotes[index].times = result.data.filter((item) => {
                  return item.Dossard == element.dossard;
                });
              });
              //console.log(this.pilotes);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },

    async update() {
      apiChrono
        .getPilote()
        .then((res) => {
          this.pilotes = res.data;
          apiChrono
            .getChrono()
            .then((result) => {
              res.data.forEach((element, index) => {
                this.pilotes[index].times = [];
                this.pilotes[index].times = result.data.filter((item) => {
                  return item.Dossard == element.dossard;
                });
              });
              this.chargeData();
              this.refreshData();
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },

    async actualiser() {
      apiChrono
        .getPilote()
        .then((res) => {
          this.pilotes = res.data;
          apiChrono
            .getChrono()
            .then((result) => {
              res.data.forEach((element, index) => {
                this.pilotes[index].times = [];
                this.pilotes[index].times = result.data.filter((item) => {
                  return item.Dossard == element.dossard;
                });
              });
              this.chargeData();
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },

    openResult() {
      if (this.$refs.form.validate()) {
        var res = this.checkIfDossardExist(this.dossard);
        if (res.length) {
          this.piloteSelect = res[0];
          if (!this.dialogResult) {
            this.dialogResult = true;
          }
        } else {
          this.snackbar = true;
        }
      }
    },

    chargeData() {
      var res = this.checkIfDossardExist(this.dossard);
      this.piloteSelect = res[0];
    },

    checkIfDossardExist(dossard) {
      var res = this.pilotes.filter((item) => {
        return item.dossard == dossard;
      });
      return res;
    },

    refreshData() {
      setTimeout(() => {
        if (this.piloteSelect.dossard != 0) {
          this.update();
        }
      }, 10000);
    },
  },
};
</script>
