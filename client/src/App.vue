<template>
  <v-app>
    <LogoBar />
    <v-main>
      <router-view>
        <router-view :car="car" />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import LogoBar from '@/components/LogoBar.vue';

export default {
  name: 'App',
  components: {
    LogoBar,
  },
  props: {
    car: {
      type: Object,
    },
  },
};
</script>
