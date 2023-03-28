<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Carousel from "../components/Carousel.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <Header />

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
                  <h5 class="card-title">Primera Serie</h5>
                  <p class="card-text">Win Duisenberg, Jean-Claude Trichet, Mario Dragui.</p>
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
                  <h5 class="card-title">Segunda Serie</h5>
                  <p class="card-text">Adoptada, Serie Europa. Mario Dragui, Christine Lagarde.</p>
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
                <h5 class="card-title">Tercera Serie</h5>
                <p class="card-text">2024</p>
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
                <h5 class="card-title">Firmas</h5>
                <p class="card-text">
                  Wim Duisenberg, Jean-Claude Trichet, Mario Draghi, Christine
                  Lagarde.
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
                <h5 class="card-title">
                  <a href="https://www.fnmt.es"
                  target="_blank"
                    >Fábrica Nacional de Moneda y Timbre</a
                  >
                </h5>
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
                <h5 class="card-title">
                  <a href="https://www.bde.es"
                  target="_blank"
                  >Banco de España</a>
                </h5>
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

button {
  background-color: #9c4f79;
  color: white;
  font-weight: bold;
  border: 2px solid #9c4f79;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: #9c4f79;
    border: 2px solid #9c4f79;
  }
}
.card {
  margin-bottom: 20px;
}
</style>
