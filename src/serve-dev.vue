<script>
import Vue from 'vue';
import { Carousel } from '@/entry';
import { Slide } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Carousel,
    Slide
  }
});
</script>

<template>
  <div id="app">
    <Carousel icon="arrow-circle" color="blue">
      <Slide>
        <div class="absolute inset-0 flex justify-center items-center">
          Bonjour slide 1
        </div>
        <img src="https://picsum.photos/600/300" alt="" class="w-full">
      </Slide>
      <Slide>
        <div class="absolute inset-0 flex justify-center items-center">
          Bonjour slide 2
        </div>
        <img src="https://picsum.photos/600/300" alt="" class="w-full">
      </Slide>
    </Carousel>
  </div>
</template>
