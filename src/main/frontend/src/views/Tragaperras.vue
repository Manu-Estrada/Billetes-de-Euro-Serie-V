<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import tragaperras from "../assets/js/tragaperras";
import { onMounted } from "vue";

onMounted(() => {
  tragaperras();
})

</script>
<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="slot">
      <div id="slot-screen">
        <ul class="reels">
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen5.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen10.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen20.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen50.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen100.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen200.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen500.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-sorpresa.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-rollos.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-jackpot.jpeg" alt="" />
          </li>
        </ul>
        <ul class="reels">
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen100.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen50.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-sorpresa.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen5.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-jackpot.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen10.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-rollos.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen20.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen500.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen200.jpeg" alt="" />
          </li>
        </ul>
        <ul class="reels">
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-jackpot.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen100.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-rollos.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen500.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen20.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen50.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen-sorpresa.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen10.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen200.jpeg" alt="" />
          </li>
          <li class="reel">
            <img src="../assets/img/tragaperras/imagen5.jpeg" alt="" />
          </li>
        </ul>
      </div>
    </div>
<div class="btn">
    <button
      type="button"
      class="stop-btn"
      data-val="0"
      disabled="true"
    ></button>
    <button
      type="button"
      class="stop-btn"
      data-val="1"
      disabled="true"
    ></button>
    <button
      type="button"
      class="stop-btn"
      data-val="2"
      disabled="true"
    ></button>
  </div>
    <div>
      <button id="start-btn">Start!</button>
    </div>

    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script> -->
  </main>
  <Footer></Footer>
</template>

<style scoped>

main{
  background-color: hsl(215, 35%, 89%);
}
.slot {
  width: 88%;
  height: 400px;
  overflow: hidden;
  margin: auto;
  margin-top: 40px;
  background-color: rgb(13, 65, 62);
  border-radius: 8px;
  box-shadow: var(--outer-shadow);
}

#slot-screen {
  height: 500px;
  position: relative;
  overflow: hidden;
}

ul {
  list-style: none;
}

ul li {
  border: 2px solid black;
  border-radius: 5px;
  width: 98%;
  margin: 1px 0;
}

.reels {
  width: 31%;
  position: absolute;
  padding: 0px;
}

.reels:nth-child(1) {
  left: 0;
}

.reels:nth-child(2) {
  left: 34.5%;
}

.reels:nth-child(3) {
  right: 0;
}

.reel img {
  display: block;
  margin: auto;
  height: 240px;
  width: 530px;
}
.btn{
  display: flex;
  justify-content: center;
}

.stop-btn {
  display: inline-block;
  padding: 35px;
  margin: 40px;
  background-color: rgb(244, 156, 163);
  box-shadow: 0 0 29 31 #fff, 0 0 19px 19px rgb(237, 119, 119), 0 0 33px 17px rgb(237, 119, 119);
  border-bottom: solid 4px #98a6c4;
  border-radius: 60px;
}

.stop-btn:hover {
  background-color: rgb(181, 230, 180);
  cursor: pointer;
  box-shadow: 0 0 29px 31px #fff, 0 0 19px 19px rgb(181 230  0),
    0 0 33px 17px  rgb(181 230  0);
}

.stop-btn:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}

#start-btn {
  margin-left: 750px;
  display: inline-block;
  padding: 20px 40px;
  background-color: rgb(181, 230, 180);
  border: 5px solid rgb(113, 225, 109);
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;

}

#start-btn:hover {
  background-color: rgb(113, 225, 109);
  cursor: pointer;
}

#start-btn:active {
  -webkit-transform: translateY(6px);
  transform: translateY(6px);
  border: none;
}
</style>
