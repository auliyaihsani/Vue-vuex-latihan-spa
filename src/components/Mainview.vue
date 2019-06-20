n<template>
  <div class="mainview">
      <h1> Member App </h1>
    <member v-for="member in members" :key="member.img" :member="member"></member>
  </div>
</template>

<script>
import Member from './Member'
import { mapGetters } from "vuex";

export default {
    computed : {
        ...mapGetters([
            'members'
        ])
    },
    components :{
      Member
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainview {
  flex: 3;
}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
