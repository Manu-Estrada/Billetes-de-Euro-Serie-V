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
        <div class="col-md-12">
          <div class="card">
            <figure>
              <img src="../assets/img/fabricacionbilletes.jpg" alt="" />
            </figure>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://www.youtube.com/watch?v=h4_PTIW7AKc"
                  target="_blank"
                  >Billetes</a
                >
              </h5>
            </div>
          </div>
        </div>
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
