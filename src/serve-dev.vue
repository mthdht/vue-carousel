<script>
import Vue from 'vue';
import { Carousel } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueCarouselSample,
    Carousel
  }
});
</script>

<template>
  <div id="app">
    <vue-carousel-sample />
    <carousel />
  </div>
</template>
