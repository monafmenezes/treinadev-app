import api from "../services/api";

const authService = {
  async authenticate({ username, password }) {
    const params = { username, password };
    return api.post("login", params);
  },

  setLoggedUser(token) {
    const logged = JSON.stringify(token);
    localStorage.setItem("token", logged);
  },

  getLoggedUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const tokenJwt = JSON.parse(token);
      return tokenJwt;
    } catch (error) {
      return null;
    }
  },
};

export default authService;
