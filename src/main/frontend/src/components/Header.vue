<template>
    <header>
      <img :src="src/main/frontend/src/assets/img/Captura de pantalla (176)logo 1.png" :alt="imageAlt">
      <h1>{{ headerText }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      imageSrc: String,
      imageAlt: String,
      headerText: String
    }
  }
  </script>