<template>
  <div id="app">

  <mainview />
  <sidebar />

  </div>
</template>

<script>
import Mainview from './components/Mainview'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Mainview,
    Sidebar
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
  display: flex;
}
</style>
