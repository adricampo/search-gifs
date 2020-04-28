<template>
  <div class="search">
    <div class="search__container container">
      <form
        @submit.prevent="onSubmit"
        class="container__form form" 
        >
        <div class="form__box box">
          <input 
            class="box__criteria" 
            type="text" 
            id="queryInput" 
            v-model="queryInput"
            placeholder="type something" />
          <button 
            class="box__button"
            type="submit" 
            value="Submit"
          >🔍</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  methods: {
    onSubmit() {
      let queryInput = this.queryInput
      this.$emit("retrieveGifs", queryInput)
      this.queryInput = null
    },
    
  }
};
</script> 

<style lang="sass">
@import 'SearchForm.sass'
</style>