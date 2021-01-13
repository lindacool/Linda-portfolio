<template>

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

      <div class="left col-sm-12 col-md-7 col-lg-6 text-center ">
          <div v-if="education.length">
              <EducationList :education="education" />
          </div>
          <div v-else> 
              <Spinner />
          </div>
      </div>
</div>
</template>

<script>
import JobList from '../components/JobList'
import getJobs from '../composables/getJobs'
import Spinner from'../components/Spinner.vue'
import getEducation from '../composables/getEducation'
import EducationList from '../components/EducationList'

export default {
    components: { JobList, Spinner , EducationList}, 
    
    setup() {

        const { education } = getEducation()
       const { job, error, load } = getJobs()
       
       

        load()

        return { job , error , education }
    }

}
</script>
