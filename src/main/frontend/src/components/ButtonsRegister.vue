<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="d-grid gap-2 d-md-flex justify-content-around mt-5 mb-5">
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
  background-color: rgb(230, 200, 236);
  color: rgb(137, 59, 59);
  font-weight: bold;
  border: 2px solid #d17dcf;
  transition: all 0.2s;

&:hover {
    background-color: white;
    color: rgb(5, 101, 5);
    border: 2px solid #117e37;
  }
}

</style>