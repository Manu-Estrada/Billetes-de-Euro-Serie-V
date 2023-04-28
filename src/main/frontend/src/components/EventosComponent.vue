<script setup>
import EventosPopUp from "./EventosPopUp.vue";
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div :id="`card-size${event.id}`" class="card-container">
    <figure v-if="event.imageevent">
      <img
        class="imgCardEvent"
        :src="`http://localhost:8080/images/event-photos/${event.imageevent.image}`"
        alt="Imagen Evento"
      />
    </figure>
    <figure v-else>
      <img
        class="imgCard"
        src="http://localhost:8080/images..........."
        alt="Imagen"
      />
    </figure>
    <div class="text-container">
      <span> {{ event.dateevent }}</span>
      <h4>{{ event.name }}</h4>
      <p>
        {{ event.description }}
      </p>

      <div class="event-popup">
        <OurEventsPopUp :eventThis="event" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../";



</style>
