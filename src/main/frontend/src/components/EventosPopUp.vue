<script setup>
const props = defineProps({
  eventThis: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <button
    type="button"
    data-bs-toggle="modal"
    :data-bs-target="`#exampleModal${eventThis.id}`"
    class="popUp-button"
  >
    Ver más
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="`exampleModal${eventThis.id}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          :id="`btnClosed${eventThis.id}`"
        ></button>
        <div>
          <div class="event-container">
              <img
                class="imgCardEvent"
                :src="`http://localhost:8080/images/event-photos/${eventThis.imageevent.image}`"
                alt="Imagen Evento"
                v-if="eventThis.imageevent"
              />
              <img
                class="imgCard"
                src="http://localhost:8080/images/.........."
                alt="Imagen"
                v-else
              />
            <div class="text-container">
              <span> {{ eventThis.dateevent }}</span>
              <h4>{{ eventThis.name }}</h4>
              <p>
                {{ eventThis.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/sass/our-events/our-events-popUp.scss";
</style>
