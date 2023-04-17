<script setup>
import Footer from "@/components/Footer.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="mb-5 container">
      <h1>La Fabricación de los Billetes</h1>
      <div class="row">
        <video autoplay controls src="../assets/video/como-se-hace-el-dinero .mp4"></video>
          </div>
        </div>
    <Footer></Footer>
  </main>
</template>

<style scoped lang="scss">
h1{
  text-align: center;
  font-family: Adlery_Swash;
  color: rgb(7, 121, 47);
  text-shadow: 0.5px 0.5px 0.5px black;
}
nav {
  background-color: rgb(190, 188, 153);
  padding: 10px;
  ul {
    margin: 0;
    padding: 0;
    font-family: Didot;
    color: white;
    text-shadow: 1px 1px 1px black;
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;


    a {
      color: white;
      transition: all 0.4s;
      &:hover {
        color: blue;
      }
    }
  }
}
</style>
