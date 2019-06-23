<template>
  <div class="">
      <div class="memebers"  :key="member.img" >
          <h3>{{ member.name }} - {{ member.point }} </h3>
          <img v-bind:src="'../../static/images/'+ member.img" width="200">
          <div v-if="allowRemove" @click.prevent="removeMember(member.id)">
            (x)
          </div>
      </div>
  </div>
</template>


<script>
import { mapActions} from 'vuex'

export default {
  props: [
    'member',
    'allowRemove'
  ],
  methods : {
    ...mapActions([
      'removeMember'
    ])
  }
}
</script>

<style>
.sidebar img {
  width: 100px;
}

</style>
