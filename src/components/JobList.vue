<template>
  <div class="post-list">
      <div v-for="job in job" :key="job.id">
        <SingleJobs :job="job" />
      </div>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import SingleJobs from './SingleJobs'

export default {
  components: { SingleJobs },
    props: ['job']

}
</script>

<style>

</style>