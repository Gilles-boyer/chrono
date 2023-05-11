import api from "./apiGit";

export default {
    getGroupe() {
        return api.get(`data.json`);
    },
} 