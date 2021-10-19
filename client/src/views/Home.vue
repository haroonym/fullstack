<template>
  <v-main>
    <v-container>
      <CarCards :cars="cars" />
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';
import CarCards from '@/components/CarCards.vue';

export default {
  name: 'App',
  created() {
    this.getCars();
  },
  methods: {
    async getCars() {
      try {
        const { data } = await axios({
          url: 'http://127.0.0.1:3000/cars',
          method: 'GET',
        });
        this.cars = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    CarCards,
  },
  data() {
    return {
      cars: [],
    };
  },
};
</script>
