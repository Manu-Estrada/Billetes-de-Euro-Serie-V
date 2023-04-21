<script setup>
import Footer from "../components/Footer.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import Navigation from "../components/Navigation.vue";

function resetForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  incident.username = "";
  incident.password = "";
}
let incident = {
  username: "",
  password: "",
};
async function save() {
  if (incident.username == "") {
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
    alert("Added " + incident.username);
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
        <h1>
          Inicio Sesión,
          <span id="Subtitle">es necesario estar registrado.</span>
        </h1>
      </div>
      <form id="form">
        <div class="form-group">
          <label for="name" id="conditions"
            ><span class="Asterisk">* </span>Todos los campos son
            obligatorios</label
          >
        </div>
        <div class="form-group">
          <label for="username"><span class="Asterisk">* </span>E-mail</label>
          <input
            v-model="incident.username"
            type="email"
            class="form-control form-control-lg"
            id="username"
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
.container {
  background-color: rgb(244, 244, 226);
  margin-bottom: 4%;
}

h1 {
  color: rgb(218, 22, 22);
  text-align: center;
  font-family: Adlery_Swash;
  text-shadow: 0.5px 0.5px 0.5px black;
}

form {
  color: #9c4f79;
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

.Asterisk {
  color: red;
}
</style>
