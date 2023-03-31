<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="d-grid gap-2 d-md-flex justify-content-around mt-5 mb-5">
        <button type="button" class="btn btn-outline-primary px-5">
          <RouterLink to="/Registrate">Regístrate</RouterLink>  
        </button>
        <button type="button" class="btn btn-outline-success px-5">
          Inicia Sesión
        </button>
      </div>        
</template>

<style scoped lang="scss">
button {
  background-color: #9c4f79;
  color: white;
  font-weight: bold;
  border: 2px solid #9c4f79;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: #9c4f79;
    border: 2px solid #9c4f79;
  }
}
</style>