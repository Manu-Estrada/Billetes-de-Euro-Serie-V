<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
</script>
<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="container">
      <h2>Próximamente ...</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-1.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-2.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-3.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-4.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-5.jpeg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-6.jpeg"
              alt=""
            />
          </figure>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">
          <a
            href="https://www.ecb.europa.eu/press/pr/date/2021/html/ecb.pr211206~a9e0ba2198.es.html"
            target="_blank"
          >
            Tercera Serie 2024</a
          >
        </h5>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style scoped lang="scss">
figure {
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
}

h2 {
  text-align: center;
  font-family: Adlery_Swash;
  margin-top: 30px;
  margin-bottom: 30px;
}

a {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px black;
}
</style>
