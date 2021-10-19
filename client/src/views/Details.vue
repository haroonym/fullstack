<template>
  <div style="margin-top:150px">
    <v-container class="d-flex flex-wrap" justify-center>
      <v-card class="mx-4 my-1" width="475">
        <v-img height="350" :src="car.image"></v-img>

        <v-card-title>{{ car.title }}</v-card-title>

        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Price</th>
              <th class="text-left">Miles</th>
              <th class="text-left">Year of Make</th>
              <th class="text-left">Current Owner</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td v-if="car.status == 'reserved'">N/A</td>
              <td v-else>{{ car.price }}</td>
              <td>{{ car.miles }}</td>
              <td>{{ car.year_of_make }}</td>
              <td v-if="car.owner">{{ car.first_name }} {{ car.last_name }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-card-text class="black--text">
          {{ car.description }}
        </v-card-text>

        <v-card-actions
          ><v-btn class="purple" color="white" text to="/">
            Go back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="white" class="red darken-4" text @click="buyCar()" v-if="car.status === 'available'">
            Order Car
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
  <!-- Haroon Younas -->
</template>

<script>
import axios from 'axios';
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      car: {},
    };
  },
  created() {
    this.getCarWithID();
  },
  methods: {
    async getCarWithID() {
      const { data } = await axios({
        url: `http://127.0.0.1:3000/car/${this.id}`,
        method: 'GET',
      });
      this.car = data.data[0];
    },
    async buyCar() {
      const { data } = await axios({
        url: `http://127.0.0.1:3000/cars/${this.car.id}`,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          status: 'reserved',
        },
      });
      this.car = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
