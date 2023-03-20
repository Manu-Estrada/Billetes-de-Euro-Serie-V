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
      <h2>Duisenberg</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete5Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete10Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete20Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete50Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete100Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete200Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDuisemberg/billete500Duisenberg.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <h2>Trichet</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesTrichet/billete5Trichet.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesTrichet/billete20Trichet.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesTrichet/billete50Trichet.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <h2>Dragui</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDragui/billete50Dragui.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/primeraserie/billetesDragui/billete100Dragui.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style scope lang="scss">
figure {
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
