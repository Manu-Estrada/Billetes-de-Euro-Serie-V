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
      <h1>Firmas de Presidencia del Banco Central Europeo</h1>
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
h1 {
  text-align: center;
  font-family: Adlery_Swash;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 70px;
  color: blue;
  text-shadow: 1px 1px 1px black;
}
h1:hover{
  transform:scale(1.1);
}

h5 {
  text-align: center;
  margin-bottom: 20px;
}

 img {
  display: block;
  margin: auto;
  height: 214.4px;
  width: 120.4px;
}
.card {
  margin-bottom: 20px;
}
main{
  background-color: rgb(250, 247, 243);

}
</style>
