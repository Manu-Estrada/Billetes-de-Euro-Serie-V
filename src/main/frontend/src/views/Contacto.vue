<script setup>
import Footer from "@/components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";

</script>

<template>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="card" style="width: 18rem;">
    <img src="../assets/img/contactimage.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text"><h3><strong>Manu Estrada</strong></h3></p>
      <br>
      <ul class="strong">
        <li>Grupo la Tejerona nº29 - 1º D</li>
        <li>C.P.33204 - Ceares - Gijón</li>
          <li>Principado de Asturias</li>
          <br>
        <li>poolbarmanu@hotmail.com</li>
    </ul>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss">
 
  .card{
    color: rgb(54, 9, 167);
    text-align: center;
    width: auto; 
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }  
  .card-body {
    margin: 0;
    padding: 0;
  }
  
  h3{
    color: rgb(21, 53, 151);
    margin-top: 5px;
  }

 
 ul {
    list-style: none;
margin-right: 30px;
margin-bottom: 30px; 
}

</style>
