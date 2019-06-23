<template>
  <div class="">
      <div class="memebers"  :key="member.img" >
          <h3>{{ member.name }} - {{ member.point }} </h3>

          <img v-bind:src="'../../static/images/'+ member.img" width="200">
      </div>
  </div>
</template>


<script>
export default {
  props: [
    'member'
  ]
}
</script>

<style>
.sidebar img {
  width: 100px;
}

</style>
