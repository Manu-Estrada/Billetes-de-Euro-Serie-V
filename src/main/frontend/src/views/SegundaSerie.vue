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
      <h2>Mario Dragui Serie VA</h2>
      <div class="row">
        <div class="col-md-3 mb-5">
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
      <h2>Mario Dragui Serie VB</h2>
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
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb/billete50Dragui-VB.jpg"
              alt=""
            />
          </figure>
      </div>
      </div>
      <h2>Mario Dragui Serie VH</h2>
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

      <h2>Christine Lagarde Serie VB</h2>
      <div class="row">
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb-lagarde/billete5€Lagarde-VB.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb-lagarde/billete10€LagardeVB.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vb-lagarde/billete50€Lagarde-VB.jpg"
              alt=""
            />
          </figure>
        </div>
        <h2>Christine Lagarde Serie VC</h2>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vc/billete5€Lagarde-VC.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vc/billete10€LagardeVC.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="col-md-3">
          <figure>
            <img
              src="../assets/img/segundaserie/serie-vc/billete50€Lagarde-VC.jpg"
              alt=""
            />
          </figure>
        </div>
        <h2>Christine Lagarde Serie VD</h2>
        <div class="col-md-3 mb-5">
          <figure>
            <img
              src="../assets/img/serie-vd/billete50€Lagarde-VD.jpg"
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
  img {
    margin:auto;;
    width: 240px;
    height: 134.29px;
  }
}

h2 {
  text-align: center;
  font-family: Adlery_Swash;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 70px;
  color: rgb(0, 51, 255);
  text-shadow: 1px 1px 1px black;
  cursor: pointer;
}
  
h2:hover{
  transform:scale(1.1);
}

main{
  background-color: rgb(250, 247, 243);

}

</style>
