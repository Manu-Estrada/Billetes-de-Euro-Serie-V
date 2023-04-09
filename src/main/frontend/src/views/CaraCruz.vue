<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";

</script>
<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div>
      <div class="container" onload="caracruz()">
        <div class="coin" id="coin">
          <div class="heads">
            <img
              src="../assets/img/caracruz/Mónaco-2007-2€-Con-1.webp"
              alt=""
            />
          </div>
          <div class="tails">
            <img
              src="../assets/img/caracruz/rEVERSO-COMUN-2E-1-300x300.png"
              alt=""
            />
          </div>
        </div>
        <div class="stats">
          <p id="heads-count">Caras: 0</p>
          <p id="tails-count">Cruces: 0</p>
        </div>
        <div class="buttons">
          <button id="flip-button">Lanza la moneda</button>
          <button id="reset-button">Reset</button>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style scoped>
.container {
  background: rgb(222, 215, 215);
  width: 400px;
  padding: 35px;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 15px 30px 35px rgba(0, 0, 0, 0.1);
}

.coin {
  height: 150px;
  width: 150px;
  position: relative;
  margin: 32px auto;
  transform-style: preserve-3d;
}

.coin img {
  width: 100%;
}

.heads,
.tails {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.tails {
  transform: rotateX(180deg);
}

@keyframes spin-tails {
  0% {
    transform: rotateX(0);
  }

  100% {
    transform: rotateX(1980deg);
  }
}

@keyframes spin-heads {
  0% {
    transform: rotateX(0);
  }

  100% {
    transform: rotateX(2160deg);
  }
}

.stats {
  display: flex;
  color: black;
  font-weight: 500;
  padding: 20px;
  margin-top: 55px;
  margin-bottom: 40px;
  box-shadow: 0 0 20px blue;
}

.stats p:nth-last-child(1) {
  margin-left: 50%;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  width: 150px;
  padding: 15px 0;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}

#flip-button {
  background: #053469;
  color: white;
}

#reset-button {
  background: #674706;
  color: white;
}
</style>
