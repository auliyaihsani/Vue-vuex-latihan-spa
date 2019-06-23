<template>
  <div class="mainview">
    <div v-if="singleView">
      <!-- ambil satu data -->
      <h1>SingleView</h1>
      <member :member="active_member"></member>
    <input type="text" placeholder="name" v-model="active_member.name"><br>
     <input type="text" placeholder="point" v-model="active_member.point"><br>
      <input type="text" placeholder="url img" v-model="active_member.img">
    </div>
    <div v-else>
        <h1> Member App </h1>
    <member v-for="member in members" :key="member.img" :member="member"></member>

    </div>
  </div>
</template>

<script>
import Member from './Member'
import { mapGetters } from "vuex";

export default {
    computed : {
        ...mapGetters([
          'active_member',
            'members',
            'singleView'
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
  color: #d4f3e5;
}
</style>
