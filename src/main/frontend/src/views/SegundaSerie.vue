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
      <h2>Dragui Serie VA</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-va/billete5Dragui-VA.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-va/billete10Dragui-VA.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-va/billete20Dragui-VA.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-va/billete50Dragui-VA.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-va/billete100Dragui-VA.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <h2>Dragui Serie VB</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb/billete5Dragui-VB.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb/billete10Dragui-VB.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb/billete50Dragui-VB.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <h2>Dragui Serie VH</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vh/billete20Dragui-VH.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vh/billete50Dragui-VH.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>

      <h2>Lagarde Serie VB</h2>
      <div class="row">
        <div class="col-md-4">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vb/billete5€Lagarde-VB.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vb/billete10€LagardeVB.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vb/billete50€Lagarde-VB.jpg"
              alt=""
            />
          </figure>
        </div>
        <h2>Lagarde Serie VC</h2>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vc/billete5€Lagarde-VC.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vc/billete10€LagardeVC.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/terceraserie/serie-vc/billete50€Lagarde-VC.jpg"
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
  margin: 0;
  width: 100%;
  object-fit: cover;
  img {
    width: 100%;
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
