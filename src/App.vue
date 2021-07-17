<template>
  <div id="app">
    <my-button @click="handleClick">testBtn</my-button>
    <hr>
    <my-input>testBtn</my-input>

  </div>
</template>

<script>
import MyUI from '../module2/my-ui'
export default {
  name: 'App',
  methods:{
    handleClick(e){
      console.log(`object`, e)
    }
  }
}
</script>

<style lang="scss">

</style>
