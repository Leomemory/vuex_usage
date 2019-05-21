<template>
  <div id="app">
    <tool></tool>
    <list></list>
    <edit></edit>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import tool from './components/tool'
import edit from './components/edit'
import list from './components/list'
export default {
  name: 'App',
  components:{
    tool,
    list,
    edit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 850px;
  /* clear: both; */
  margin: 0 auto;
}
</style>
