<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Carousel from "../components/Carousel.vue";
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
              <img
                class="card-img-top"
                src="../assets/img/primera-serie.jpg"
                alt="Primera Serie"
              />
              <div class="card-body">
                <h5 class="card-title">Primera Serie</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/segunda-serie.jpg"
                alt="Segunda Serie"
              />
              <div class="card-body">
                <h5 class="card-title">Segunda Serie</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <figure>
                <img
                  class="card-img-top"
                  src="../assets/img/tercera-serie.jpeg"
                  alt="Tercera Serie"
                />
              </figure>
              <div class="card-body">
                <h5 class="card-title">Tercera Serie</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/firmas.jpg"
                alt="Firmas"
              />
              <div class="card-body">
                <h5 class="card-title">Firmas</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/fnmt.webp"
                alt="F.N.M.T."
              />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="https://www.fnmt.es">F.N.M.T.</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/banco-de-espana-.jpg"
                alt="Banco de España"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <a href="https://www.bde.es">Banco de España</a>
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
  aspect-ratio: 1/0.4;
  image {
    width: 100%;
    object-fit: cover;
  }
}

button{
  background-color: #9C4F79;
  color: white;
  font-weight: bold;
  border: 2px solid #9C4F79;
  transition: all 0.4s;

  &:hover{
    background-color: white;
    color: #9C4F79;
    border: 2px solid #9C4F79;
  }
}
</style>
