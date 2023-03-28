<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
</script>
<template>
  <Header></Header>
  <main>
    <div class="d-grid gap-2 d-md-flex justify-content-around mt-5 mb-5">
      <button type="button" class="btn btn-outline-primary px-5">
        Regístrate
      </button>
      <button type="button" class="btn btn-outline-success px-5">
        Inicia Sesión
      </button>
    </div>
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

button {
  background-color: #9c4f79;
  color: white;
  font-weight: bold;
  border: 2px solid #9c4f79;
  transition: all 0.4s;

  &:hover {
    background-color: white;
    color: #9c4f79;
    border: 2px solid #9c4f79;
  }
}
</style>
