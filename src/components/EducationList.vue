<template>
  <div class="post-list">
      <div v-for="education in education" :key="education.id">
        <SingleEducation :education="education" />
      </div>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import SingleEducation from './SingleEducation'

export default {
  components: { SingleEducation },
    props: ['education']

}
</script>

<style>

</style>