<!-- <script setup>
const date = computed(() => {
  const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const today = new Date();
  const dayOfWeek = weekdays[today.getDay()];
  const dayOfMonth = ('0' + today.getDate()).slice(-2);
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const year = today.getFullYear();
  return `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;
});
const hourElement = ref('')
function updateTime() {
  const currentDate = new Date();
  let hour = currentDate.getHours();
  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
  const seconds = ('0' + currentDate.getSeconds()).slice(-2);
  if (hour === 0) {
    // Si la hora es 0, actualizamos la fecha y reiniciamos la hora a 0
    date.value = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    hour = 0;
  }
  hourElement.value = `${hour}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
</script> -->
  

<template>
 
  <header>
    <h1>Billetes de Euro Españoles<br>Serie V</h1>
  </header>
  <!-- <div id="info">
    <p id="date">{{ date }}</p>
</div>
<div>
    <p id="hour">{{ hourElement }}</p>
</div> -->

</template>

<style lang="scss" scoped>

@font-face {
  font-family: Adlery_Swash;
  src: url(../assets/fonts/Adlery_Swash.ttf);
}

header{
  background-image: url("../assets/img/billeteseuro1706x960.jpg");
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Adlery_Swash;
  background-color: rgb(237, 237, 237);

  h1{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color:white;
    text-align: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 5vw; 
    margin: 0%;
    text-shadow: 5px 5px 5px black;
  }
  
}
</style>
