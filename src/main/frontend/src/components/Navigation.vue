<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li>Foro</li>
      <li>Historia del Euro</li>
      <li>Tienda</li>
      <li>Contacto</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color:rgb(198, 188, 188);
  padding: 10px;
  ul {
    margin: 0;
    padding: 0;
    font-family: Didot;
    color: white;
    text-shadow: 1px 1px 1px black;
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;

    a {
      color: white;
        transition: all 0.4s;
        &:hover{
            color: blue;
        }
    }
  }
}
</style>
