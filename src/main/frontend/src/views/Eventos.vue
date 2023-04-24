<script setup>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import ButtonsRegisterVue from "../components/ButtonsRegister.vue";
import ApiRepository from "../assets/apis/ApiRepository";
import { ref } from "vue";
import { onBeforeMount } from "vue";

const repository = new ApiRepository("eventos");
const api = repository.chooseApi();

let eventsList = ref([]);
onBeforeMount(async () => {
  eventsList.value = await api.getAll();
});
</script>

<template>
  <main>
    <ButtonsRegisterVue></ButtonsRegisterVue>
    <Navigation></Navigation>
    <div class="card-deck">
      <div
        class="card"
        v-for="events in eventsList"
        :key="events.id"
        :item="events"
      >
        <img
          class="card-img-top"
          :src="`http://localhost:8080/images/aboutus-photos/${events.imageAboutUs.image}`"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ events.name }}</h5>
          <p class="card-text">{{ events.description }}</p>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped></style>
