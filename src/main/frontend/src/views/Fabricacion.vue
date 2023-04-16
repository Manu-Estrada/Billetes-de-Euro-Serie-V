<script setup>
import Footer from "@/components/Footer.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
</script>

<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <div class="container">
      <h1>La Fabricación de los Billetes</h1>
      <div class="row">
                <a
                href="../assets/video/Como se HACE el DINERO en las Fábricas💶_ Como se CREA el DINERO bancario _ Fábrica de dinero.mp4"  
                  target="_blank"
                  ></a>
          </div>
        </div>
    <Footer></Footer>
  </main>
</template>

<style scoped lang="scss">
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
