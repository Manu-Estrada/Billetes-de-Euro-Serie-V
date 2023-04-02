<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Carousel from "../components/Carousel.vue";
import { RouterLink } from "vue-router";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
</script>

<template>
  <div>
    <main>
      <ButtonsRegisterVue></ButtonsRegisterVue>
      <Navigation></Navigation>

      <Carousel></Carousel>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <RouterLink to="/primeraserie">
                <figure class="ratio ratio-16x9">
                  <img
                    class="card-img-top"
                    src="../assets/img/primera-serie.webp"
                    alt="Primera Serie"
                  />
                </figure>
                <div class="card-body">
                  <h1 class="card-title">Primera Serie</h1>
                  <p class="card-text"><strong>
                    Win Duisenberg, Jean-Claude Trichet, Mario Dragui.
                  </strong>
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <RouterLink to="/SegundaSerie">
                <figure class="ratio ratio-16x9">
                  <img
                    class="card-img-top"
                    src="../assets/img/segunda-serie.jpg"
                    alt="Segunda Serie"
                  />
                </figure>
                <div class="card-body">
                  <h1 class="card-title">Segunda Serie</h1>
                  <p class="card-text"><strong>
                    Adoptada, Serie Europa. Mario Dragui, Christine Lagarde.
                  </strong>
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <RouterLink to="/TerceraSerie">
                <figure class="ratio ratio-16x9">
                  <img
                    class="card-img-top"
                    src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-0.jpg"
                    alt="Tercera Serie"
                  />
                </figure>
                <div class="card-body">
                  <h1 class="card-title">Tercera Serie</h1>
                  <p class="card-text"><strong>2024</strong></p>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <RouterLink to="/Firmas">
                <figure class="ratio ratio-16x9">
                  <img
                    class="card-img-top"
                    src="../assets/img/banderafirmas.jpg"
                    alt="Firmas"
                  />
                </figure>
                <div class="card-body">
                  <h1 class="card-title">Firmas</h1>
                  <p class="card-text"><strong>
                    Wim Duisenberg, Jean-Claude Trichet, Mario Draghi, Christine
                    Lagarde.
                  </strong>
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card">
              <figure class="ratio ratio-16x9">
                <img
                  class="card-img-top"
                  src="../assets/img/fnmt.webp"
                  alt="F.N.M.T."
                />
              </figure>
              <div class="card-body">
                <h1 class="card-title">
                  <a href="https://www.fnmt.es" target="_blank"
                    >F.N.M.T.</a
                  >
                </h1>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <figure class="ratio ratio-16x9">
                <img
                  class="card-img-top"
                  src="../assets/img/banco-de-espana-.jpg"
                  alt="Banco de España"
                />
              </figure>
              <div class="card-body">
                <h1 class="card-title">
                  <a href="https://www.bde.es" target="_blank"
                    >Banco de España</a
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
figure {
  width: 100%;
  image {
    width: 100%;
    object-fit: cover;
  }
}
.card {
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  text-shadow: 1.5px 1.5px 1.5px black;
}

p {
  text-align: center;
}
.card-title {
  
}

</style>
