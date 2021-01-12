<template>

<div class="container-fluid">
  <div class="row">
      <div class="left col-sm-12 col-md-7 col-lg-6 text-center ">
          <div v-if="error">{{error}}</div>
          <div v-if="job.length">
              <JobList :job="job" />
          </div>
          <div v-else> 
              <Spinner />
          </div>

      </div>
      
  
  </div>
</div>
</template>

<script>
import JobList from '../components/JobList'
import getJobs from '../composables/getJobs'
import Spinner from'../components/Spinner.vue'

export default {
    components: { JobList, Spinner}, 
    setup() {
       const { job, error, load } = getJobs()

       load()

        return { job , error }
    }, 
}
</script>
