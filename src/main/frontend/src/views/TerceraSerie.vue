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
      <h2>Próximamente ...</h2>
      <div class="card-body">
        <h5 class="card-title">
          <a
            href="https://www.ecb.europa.eu/press/pr/date/2021/html/ecb.pr211206~a9e0ba2198.es.html"
            target="_blank"
          >
            Tercera Serie 2024</a
          >
        </h5>
      </div>
      <div class="row">
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-1.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-2.jpeg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/serie3-imagen.jpeg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-4.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-5.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-6">
          <figure>
            <img
              src="../assets/img/terceraserie/terceraserie-fotos/terceraserie-fotos-6.png"
              alt=""
            />
          </figure>
        </div>
      </div>
      </div>

     
  </main>
  <Footer></Footer>
</template>

<style scoped lang="scss">
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
  font-size: 70px;
  color: rgb(7, 121, 47);
  text-shadow: 1px 1px 1px black;
}

a {
  font-size: 70px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-shadow: 1.5px 1.5px 1.5px black;
}

 img {
  margin:auto;;
  width: 456px;
  height: 550px;
}

</style>
