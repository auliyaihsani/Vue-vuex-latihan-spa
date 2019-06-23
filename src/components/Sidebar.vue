<template>
  <div class="sidebar">
  <h2>Sidebar</h2>
   <member v-for="member in members" :key="member.img" :member="member"  :allowRemove="true" @click.native.prevent="showMember(member)"></member>


   <div id="actions">
     <a href="#" @click.prevent="showMembers()">semua member</a>
     <a href="#" @click.prevent="addMember()">add member</a>
   </div>
  </div>
</template>

<script>
import Member from './Member'
import { mapGetters, mapActions } from "vuex";

export default {
    computed : {
        ...mapGetters([
            'members'
        ])
    },
    components :{
      Member
    },
    methods: {
      ...mapActions([
      'showMember',
      'showMembers',
      'addMember'
      ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  flex: 1;
}

#actions a{
  display: block;
}
</style>
