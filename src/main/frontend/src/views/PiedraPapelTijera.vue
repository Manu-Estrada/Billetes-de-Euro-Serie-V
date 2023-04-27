<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import piedrapapeltijera from "../assets/js/piedrapapeltijera";
import { onMounted } from "vue";

onMounted(() => {
  piedrapapeltijera();
});
</script>
<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="background">
      <div class="container">
        <header>
          <h1>
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
          </h1>
          <div class="score-container">
            <h4>Score</h4>
            <p id="score">0</p>
          </div>
        </header>
      </div>

      <main id="main">
        <button class="btn-circle btn-paper pick" data-choice="paper">
          <span class="wrapper">
            <img
              src="../assets/img/piedrapapeltijera/icon-paper.svg"
              alt="icon-paper"
            />
          </span>
        </button>
        <button class="btn-circle btn-scissors pick" data-choice="scissors">
          <span class="wrapper">
            <img
              src="../assets/img/piedrapapeltijera/icon-scissors.svg"
              alt="icon-scissors"
            />
          </span>
        </button>
        <button class="btn-circle btn-rock pick" data-choice="rock">
          <span class="wrapper">
            <img
              src="../assets/img/piedrapapeltijera/icon-rock.svg"
              alt="icon-rock"
            />
          </span>
        </button>
      </main>

      <div class="selection" id="selection">
        <div>
          <h2>You picked</h2>
          <button class="btn-circle btn-paper" id="user_select">
            <span class="wrapper">
              <img
                src="../assets/img/piedrapapeltijera/icon-paper.svg"
                alt="icon-paperbtn-paper"
              />
            </span>
          </button>
        </div>
        <div>
          <p class="big-text">You <span id="winner">win</span></p>
          <button class="btn" id="reset">Play again</button>
        </div>
        <div>
          <h2>The computer picked</h2>
          <button class="btn-circle btn-rock" id="computer_select">
            <span class="wrapper">
              <img
                src="../assets/img/piedrapapeltijera/icon-rock.svg"
                alt="icon-rock"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style scoped>
.background {
  background: radial-gradient(
    circle at 50% 0%,
    hsl(214, 89%, 11%),
    hsl(240, 17%, 54%)
  );
  color: #fff;
  font-family: "Barlow Semi Condensed", sans-serif;

  min-height: 100vh;
  margin-bottom: 50px;
}
.container {
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
}

header {
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 50px 0;
}

h1 {
  font-size: 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  line-height: 0.8;
  text-transform: uppercase;
}

h2 {
  letter-spacing: 2px;
  text-transform: uppercase;
}

h4 {
  color: hsl(229, 64%, 46%);
  margin: 0;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.score-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  text-align: center;
}

.score-container p {
  color: hsl(229, 25%, 31%);
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
}

#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 100px;
  height: 350px;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 200px;
  position: relative;
}

#main::after {
  background-image: url("../assets/img/piedrapapeltijera/bg-triangle.svg");
  background-repeat: no-repeat;
  content: "";
  position: absolute;
  top: 20%;
  left: 10%;
  height: 70%;
  width: 70%;
  z-index: -1;
}

.btn-circle {
  border: none;
  border-radius: 50%;
  box-shadow: inset 0 -5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin: 0 25px;
  height: 150px;
  width: 150px;
}

.btn-circle:focus {
  outline: none;
}

.btn-circle:active {
  transform: scale(0.9);
}

.btn-circle .wrapper {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: inset 0 5px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
}

.btn-paper {
  background: linear-gradient(
    to bottom,
    hsl(230, 89%, 63%),
    hsl(230, 89%, 65%)
  );
}

.btn-scissors {
  background: linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
}

.btn-rock {
  background: linear-gradient(
    to bottom,
    hsl(349, 71%, 52%),
    hsl(349, 70%, 56%)
  );
}

.btn-rules {
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  font-family: inherit;
  padding: 10px 25px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.btn {
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  color: hsl(229, 25%, 31%);
  font-size: 20px;
  font-family: inherit;
  padding: 10px 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.selection {
  display: none;
  top: 150px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
}

.selection .btn-circle {
  margin: 50px 100px;
  transform: scale(1.4);
}

.big-text {
  font-size: 3rem;
  margin: 0 0 20px;
  line-height: 0.8;
  text-transform: uppercase;
}
</style>
