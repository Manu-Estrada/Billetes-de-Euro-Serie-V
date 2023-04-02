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
  background-color: rgb(131, 131, 244);
  font-weight: bold;
  border: 2px solid rgb(11, 11, 134);
  transition: all 0.2s;

&:hover {
    background-color: whitesmoke;
    border: 2px solid blue;
    a {
      color: rgb(131, 131, 244);
    }
  }
}
a {
  color: white;
  text-shadow: 0.5px 0.5px 0.5px black;
}

</style>