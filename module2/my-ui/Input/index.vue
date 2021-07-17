<template>
  <div >
      <input type="text" :class="['my-input',type]" placeholder="hi"/>
  </div>
</template>
<script>
export default {
  props:{
    type:String
  },
  name: 'MyInput',

}
</script>
<style lang='scss'>

</style>
