<template>
  <div id="app" class="app">
    <Header />
    <img width="250px" alt="Vue logo" src="./assets/gif-logo.gif" />
    <SearchForm @retrieveGifs="gifsList" />
    <BestGifs
      @retrieveTopGifs1="gifsList"
      @retrieveTopGifs2="gifsList"
      @retrieveTopGifs3="gifsList"
    />
    <Results :gifs="gifs" />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import Results from "./components/Results/Results";
import BestGifs from "./components/BestGifs/BestGifs";

export default {
  name: "app",
  components: {
    Header,
    SearchForm,
    Results,
    BestGifs
  },
  data() {
    return {
      gifs: []
    };
  },
  methods: {
    // API call to get data using a query
    async gifsList(queryInput) {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=n3bZe4akFHmonoAyeLs5KLeeHGwU2xw7&q=${queryInput}&limit=25&offset=0&rating=G&lang=en`
        );
        const result = await response.json();
        const gifs = result.data;

        this.gifs = gifs;
        this.$emit("showGifs", gifs);
      } catch (error) {
        throw new Error("something went wrong..");
      }
    }
  }
};
</script>

<style lang="sass">
@import 'App.sass'
</style>
