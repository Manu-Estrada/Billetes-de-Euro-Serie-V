<script setup>
import Footer from "../components/Footer.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import Navigation from "../components/Navigation.vue";

function resetForm() {
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("ConfirmPassword").value = "";
  incident.userName = "";
  incident.password = "";
}
let incident = {
  userName: "",
  password: "",
};
async function save() {
  if (incident.userName == "") {
    alert("email is needed");
    return;
  }
  if (incident.password == "") {
    alert("password is needed");
    return;
  }
  const baseUrl = "http://localhost:8080";
  let auth = "";
  auth = encodeB64(incident.password);
  incident.password = auth;
  const payload = JSON.stringify(this.incident);
  console.log(payload);
  const url = "http://localhost:8080/api/register/add";
  const r = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json",
    },
  });
  function encodeB64(password) {
    const encodeData = window.btoa(`${password}`);
    return encodeData;
  }

  const response = r;
  console.log(response);
  if (response) {
    alert("Added " + incident.userName);
    resetForm();
  } else {
    alert("An error has occurred.\nPlease try again after a few minutes.");
  }
}
</script>

<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="container">
      <div id="TitleAndButton">
        <h1>Date de alta, es necesario estar registrado.</h1>
      </div>
      <form id="form">
        <div class="form-group">
          <label for="name" id="conditions"
            ><span class="Asterisk">* </span>Todos los campos son
            obligatorios</label
          >
        </div>
        <div class="form-group">
          <label for="userName"><span class="Asterisk">* </span>E-mail</label>
          <input
            v-model="incident.userName"
            type="email"
            class="form-control form-control-lg"
            id="userName"
            placeholder="Escribe un email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password"
            ><span class="Asterisk">* </span>Contraseña</label
          >
          <input
            v-model="incident.password"
            type="password"
            class="form-control form-control-lg"
            id="password"
            placeholder="Introduce una contraseña"
            required
          />
        </div>

        <div class="form-group">
          <label for="password"
            ><span class="Asterisk">* </span>Repite tu contraseña</label
          >
          <input
            v-model="ConfirmPassword"
            type="password"
            class="form-control form-control-lg"
            id="ConfirmPassword"
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        <div id="buttons-box">
          <button
            type="button"
            class="btn btn-success"
            id="send"
            @click="save()"
          >
            Suscribirse
          </button>

          <button
            type="button"
            class="btn btn-success"
            id="reset"
            @click="resetForm()"
          >
            Borrar
          </button>
        </div>
      </form>
    </div>
  </main>

  <Footer></Footer>
</template>

<style lang="scss" scoped>
h1 {
  color: rgb(218, 22, 22);
  text-align: center;
  font-family: Adlery_Swash;
  text-shadow: 0.5px 0.5px 0.5px black;
}

form {
  color: rgb(65, 61, 61);
  font-family: Didot;
}

#buttons-box {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: rgb(189, 189, 189);
    font-weight: bold;
    border: 2px solid rgb(159, 157, 157);
    transition: all 0.2s;

    &:hover {
      background-color: rgb(189, 189, 189);
      border: 2px solid rgb(159, 157, 157);
      a {
        color: blue;
      }
    }
  }
}
a {
  color: white;
  text-shadow: 0.5px 0.5px 0.5px black;
}

div.container {
  background-color: rgb(244, 244, 226);
  margin-top: 0.5%;
  margin-bottom: 4%;
}

.Asterisk {
  color: red;
}
</style>
