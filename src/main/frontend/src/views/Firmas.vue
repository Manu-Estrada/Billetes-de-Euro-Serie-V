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
