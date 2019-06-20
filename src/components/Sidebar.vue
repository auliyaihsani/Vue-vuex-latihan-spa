<template>
  <div class="sidebar">
  <h2>Sidebar</h2>
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
.sidebar{
  flex: 1;
}
</style>
