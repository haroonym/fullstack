<template>
  <div class="d-flex flex-wrap justify-center">
    <CarCard :c="car" v-for="(car, i) of cars" :key="i" />
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue';
export default {
  props: {
    cars: {
      type: Array,
    },
  },
  components: {
    CarCard,
  },
};
</script>

<style lang="scss" scoped></style>
