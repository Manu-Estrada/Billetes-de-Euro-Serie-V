<template>
  <header>
    <h1>Billetes de Euro Españoles<br>Serie V</h1>
  </header>
</template>

<style lang="scss" scoped>

@font-face {
  font-family: Adlery_Swash;
  src: url(../assets/fonts/Adlery_Swash.ttf);
}

header{
  background-image: url("../assets/img/billetes-euro-espanoles-serie-v.jpg");
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Adlery_Swash;
  border-radius: 10px;

  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color:white;
    text-align: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    font-size: 5vw; 
    margin: 0%;
    text-shadow: 5px 5px 5px black;
  }
}
</style>
