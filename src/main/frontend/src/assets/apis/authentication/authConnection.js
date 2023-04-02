import { useAuthStore } from "../../../stores/auth-storage";

export default class AuthConnection {
  #baseUrl = "http://localhost:8080";
  #auth = "";

  async login(username, password) {
    this.#auth = this.encodeB64(username, password);

    console.log(this.#auth)

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${this.#auth}`);
    myHeaders.append("Content-Type", "text/plain");

    const response = await fetch(this.#baseUrl + "/api/login", {
      method: 'GET',
      headers: myHeaders,
      credentials: 'include',
      redirect: 'follow',
    });

    if (response) {
      const cosa = await response.json()
      const store = useAuthStore();
      store.isAuthenticate = true;
      store.roles = cosa.role;
      store.username = cosa.username;
    } else {
      alert("An error has occurred.\nPlease try again after a few minutes.");
    }
  }
  encodeB64(username, password) {
    const encodeData = window.btoa(`${username}:${password}`);
    return encodeData;
  }
}
