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
    <Carousel icon="angle" color="blue">
      <Slide>
        <div class="" style="position:absolute">
          Bonjour slide 1
        </div>
        <img src="https://picsum.photos/600/300" alt="" style="width: 100%">
      </Slide>
      <Slide>
        <div style="position:absolute">
          Bonjour slide 2
        </div>
        <img src="https://picsum.photos/600/300" alt="" style="width: 100%">
      </Slide>
    </Carousel>
  </div>
</template>
