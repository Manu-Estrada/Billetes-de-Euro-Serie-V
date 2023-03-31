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
      <h2>Firmas de Presidencia del Banco Central Europeo</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <figure>
              <img src="../assets/img/firmas/duisenberfirma.jpg" alt="" />
            </figure>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://es.wikipedia.org/wiki/Wim_Duisenberg"
                  target="_blank"
                  >Wim Duisenberg</a
                >
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <figure>
              <img src="../assets/img/firmas/trichetfirma.jpg" alt="" />
            </figure>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://es.wikipedia.org/wiki/Jean-Claude_Trichet"
                  target="_blank"
                  >Jean-Claude Trichet</a
                >
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <figure>
              <img src="../assets/img/firmas/draguifirma.jpg" alt="" />
            </figure>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://es.wikipedia.org/wiki/Mario_Draghi"
                  target="_blank"
                  >Mario Dragui</a
                >
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <figure>
              <img src="../assets/img/firmas/lagardefirma.jpg" alt="" />
            </figure>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://es.wikipedia.org/wiki/Christine_Lagarde"
                  target="_blank"
                  >Christine Lagarde</a
                >
              </h5>
            </div>
          </div>
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
</style>
