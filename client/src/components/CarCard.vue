<template>
  <div style="margin-top:150px">
    <v-card class="mx-4 my-1" width="375">
      <v-img height="300px" :src="c.image"></v-img>

      <v-card-title>{{ c.title }}</v-card-title>

      <v-card-text class="black--text">
        <p>
          Owner: <b>{{ c.first_name }} {{ c.last_name }}</b>
        </p>
        <p>
          Year: <b>{{ c.year_of_make }}</b>
        </p>
        <span>
          Miles: <b>{{ c.miles }}</b>
        </span>

        <p v-if="c.status == 'reserved'">Price: <b>N/A</b></p>
        <p v-else>
          Price: <b>{{ c.price }}</b>
        </p>

        <p>
          {{ c.description }}
        </p>
      </v-card-text>

      <v-card-actions
        ><v-btn
          v-if="c.status == 'available'"
          class="purple"
          exact
          color="white"
          text
          @click="$router.push(`/details/${c.id}`)"
        >
          Details
        </v-btn>
        <v-btn
          v-if="c.status == 'sold' || c.status == 'reserved'"
          class="red ml-auto"
          exact
          color="white"
          text
          @click="deleteCar(c.id)"
        >
          DELETE
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    c: {
      type: Object,
    },
  },
  methods: {
    deleteCar(id) {
      console.log(id);
      axios({
        url: `http://127.0.0.1:3000/cars/${id}`,
        method: 'DELETE',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
