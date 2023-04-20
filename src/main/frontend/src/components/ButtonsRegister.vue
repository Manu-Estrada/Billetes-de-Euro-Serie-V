<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="d-grid gap-2 d-md-flex justify-content-around">
        <button type="button" class="btn btn-outline-primary px-5">
          <RouterLink to="/Registrate">Regístrate</RouterLink>  
        </button>
        <button type="button" class="btn btn-outline-success px-5">
          <RouterLink to="/IniciarSesion">Iniciar Sesión</RouterLink>  
        </button>
      </div>        
</template>

<style scoped lang="scss">
button {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: rgb(189, 189, 189);
  font-weight: bold;
  border: 2px solid rgb(159, 157, 157);
  transition: all 0.2s;


  &:hover {
    background-color: rgb(189, 189, 189);
    border: 2px solid rgb(159, 157, 157);
    a {
      color: blue;
    }
  }
}
a {
  color: white;
  text-shadow: 0.5px 0.5px 0.5px black;
}


</style>