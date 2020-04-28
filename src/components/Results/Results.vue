<template>
  <div class="results">
    <ul class="results__list">
      <li href="/" class="results__item" v-for="gif in gifs" :key="gif.id">
        <img class="results__image" v-bind:src="gif.images.downsized_medium.url" />
        <!-- <h4 class="item__title" style="bold">{{ gif.title }}</h4> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["gifs"]
};
</script>

<style lang="sass">
@import 'Results.sass'
</style>