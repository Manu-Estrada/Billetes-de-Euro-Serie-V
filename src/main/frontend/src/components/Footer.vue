
<template>
    <footer>
      <nav>
        <ul>
          <li>&copy; Manu Estrada</li>
          <li><RouterLink to="/">Política de privacidad</RouterLink></li>
          <li>Política de cookies</li>
          <li>Aviso legal</li>
          <li>Enlaces</li>
        </ul>
      </nav>
    </footer>
  </template>

  <style lang="scss" scoped>
footer{
  background-image: url("../assets/img/billeteseuro1706x960.jpg");
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  nav {
    background-color: #e8c0da;
    padding: 10px;
    width: 100%;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      font-size: 24px;
  
      a {
          transition: all 0.4s;
          &:hover{
              color: black;
          }
      }
    }
  }
}


</style>

