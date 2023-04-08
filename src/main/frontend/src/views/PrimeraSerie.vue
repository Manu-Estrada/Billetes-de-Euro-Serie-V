<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";

</script>
<template>
  <main>
  <ButtonsRegisterVue></ButtonsRegisterVue> 
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

<style lang="scss" scoped>
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


</style>
