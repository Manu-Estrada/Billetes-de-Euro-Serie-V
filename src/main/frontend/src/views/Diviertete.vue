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
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <RouterLink to="/CaraCruz">
              <figure class="ratio ratio-16x9">
                <img
                  class="card-img-top"
                  src="../assets/img/moneda2eurosdecanto.jpg"
                  alt="Cara o Cruz"
                />
              </figure>
              <div class="card-body">
                <h1 class="card-title">Cara o Cruz</h1>
                <p class="card-text">
                  <strong> Todo un clásico, ¿ Qué lado eliges ? </strong>
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <RouterLink to="/PiedraPapelTijera">
              <figure class="ratio ratio-16x9">
                <img
                  class="card-img-top"
                  src="../assets/img/piedra-papel-tijera-image.jpg"
                  alt="Piedra Papel o Tijera"
                />
              </figure>
              <div class="card-body">
                <h1 class="card-title">Piedra Papel o Tijera</h1>
                <p class="card-text">
                  <strong> ¡¡¡ Elige la Mano correcta !!! </strong>
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <RouterLink to="/Tragaperras">
              <figure class="ratio ratio-16x9">
                <img
                  class="card-img-top"
                  src="../assets/img/tragaperrasgoplay.jpg"
                  alt="Máquina Tragaperras"
                />
              </figure>
              <div class="card-body">
                <h1 class="card-title">Máquina de Billetes</h1>
                <p class="card-text">
                  <strong> ¡¡¡ A por la Combinación Ganadora !!! </strong>
                </p>
              </div>
            </RouterLink>
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
  image {
    width: 100%;
    object-fit: cover;
  }
}
.card {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  text-shadow: 1.5px 1.5px 1.5px black;
}

p {
  text-align: center;
}
main {
  background-color: rgb(250, 247, 243);
}
</style>
