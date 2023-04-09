<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li>
        <a href="https://es.wikipedia.org/wiki/Euro" target="_blank">Historia del Euro</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=h4_PTIW7AKc" target="_blank">Fabricación</a>
      </li>
      <li><RouterLink to="/Diviertete">Diviértete</RouterLink></li>
      <li><RouterLink to="/Contacto">Contacto</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: rgb(190, 188, 153);
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
      &:hover {
        color: blue;
      }
    }
  }
}
</style>
