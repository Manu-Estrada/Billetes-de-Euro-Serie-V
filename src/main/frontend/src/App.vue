<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div>
      <Header
        :image-src="'ruta/de/la/imagen.png'"
        :image-alt="'Descripción de la imagen'"
        :header-text="'Mi encabezado con imagen y texto'"
      />
      <main>
        <!-- Aquí va el contenido principal de la página -->
      </main>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  
  export default {
    name: 'App',
    components: {
      Header
    }
  }
  </script>