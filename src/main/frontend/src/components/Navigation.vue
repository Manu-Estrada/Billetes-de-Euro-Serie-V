<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li>
        <a href="https://es.wikipedia.org/wiki/Euro" target="_blank"
          >Historia del Euro</a
        >
      </li>
      <li>
        <RouterLink to="/Fabricacion">Fabricación</RouterLink>
      </li>
      <li><RouterLink to="/Diviertete">Diviértete</RouterLink></li>
      <li><RouterLink to="/Eventos">Eventos</RouterLink></li>
      <li><RouterLink to="/Contacto">Contacto</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: rgb(189, 189, 189);
  padding: 10px;
  margin-bottom: 4%;
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

    li {
      display: flex;
      align-items: center;
    }

    a {
      color: white;
      transition: all 0.4s;
      &:hover {
        color: blue;
      }
    }
  }
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;

    li {
      margin-bottom: 10px;
    }
  }
}
</style>
