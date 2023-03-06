<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cards from "@/components/Cards.vue";
</script>

<template>
  <div>
    <Header
      :image-src="'ruta/de/la/imagen.png'"
      :image-alt="'Descripción de la imagen'"
      :header-text="'Mi encabezado con imagen y texto'"
    />  



    <main>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-outline-primary">
          Regístrate
        </button>
        <button type="button" class="btn btn-outline-success">
          Inicia Sesión
        </button>
      </div>



 <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <a href="https://www.fnmt.es">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a href="https://www.bde.es">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
            </div>
          </a>
        </div>
      </div>
    </div>
    </main>
    <Footer
      :image-src="'ruta/de/la/imagen.png'"
      :image-alt="'Descripción de la imagen'"
      :header-text="'Mi encabezado con imagen y texto'"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
