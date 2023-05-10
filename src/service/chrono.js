import api from "./api";

export default {
    getChrono() {
        return api.get(`VH3ZVCN4TZXHGT6PRXCJF0ZKR45HVBT1`);
    },
    getPilote() {
        return api.get(`UBIN05SCR24Z1GKXASJFZKK8FWTA8U0S`);
    },
    getClassement() {
        return api.get(`QSH5MRJP9UU7BU449D4ZZZHZCIH72VQG`);
    },
    getClassementCat() {
        return api.get(`E0A8X42ZN9GTT35VIYV5P02PMM8AYIQ2`);
    },
    getClassementEndurance() {
        return api.get(`EWRT0U4HCAEZ7PIF3LBYZZ8UJH4PTAWD`);
    }
} 