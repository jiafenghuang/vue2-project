<template>
    <div style="color:red;height:100px;width:100px">
      <button :class="['my-btn',type]" @click="btnClick($event)"><slot>默认按钮名称</slot></button>
    </div>
</template>
<script>
export default {
  name: 'MyButton',
  props:{
    type:String
  },
  methods:{
    btnClick(e){
      this.$emit('click',e)
    }
  }
}
</script>
<style lang='scss'>
.my-btn{
  height:50px;
  padding: 0 15px;
  border:1px solid #dddddd;
  background-color: #fff;
  &.primary{
    border:1px soild #dddddd;
    background-color: blue;
    color:#fff;
  }
  &.warning{
    border:1px soild #dddddd;
    background-color: orange;
    color:#fff;
  }
  &.success{
    border:1px soild #dddddd;
    background-color: green;
    color:#fff;
  }
  &.danger{    
    border:1px soild #dddddd;
    background-color: red;
    color:#fff;
  }
}
</style>
