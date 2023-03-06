<template>
    <header>
      <img src="../assets/img/logoportada.png">
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
  <style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
</style>