<template>
  <div class="search">
    <div class="search__container container">
      <form class="container__form form">
        <div class="form__box box">
          <input class="box__criteria" type="text" name="query" placeholder="type something" />
          <button class="box__button">🔍</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm"
};
</script> 

<style lang="sass">
@import 'SearchForm.sass'
</style>