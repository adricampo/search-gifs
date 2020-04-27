<template>
  <div id="app" class="app">
    <Header />
    <img width="300px" alt="Vue logo" src="./assets/gif-logo.gif">
    <SearchForm />
    <BestGifs />

  </div>
</template>

<script>
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import BestGifs from './components/BestGifs/BestGifs.vue'

export default {
  name: 'app',
  components: {
    Header,
    SearchForm,
    BestGifs
  },
  methods: {
    //call to API to get data
    async getGifs() {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=n3bZe4akFHmonoAyeLs5KLeeHGwU2xw7&q=panda&limit=25&offset=0&rating=G&lang=en"
        );
        const result = await response.json();

        return result;
      } catch (error) {
        throw new Error ('something went wrong..')
      }
    },
  }
}

</script>

<style lang="sass">
  @import 'App.sass'
</style>
