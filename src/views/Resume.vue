<template>
 <div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex text-center p-0 m-0">
         <div v-if="error">{{error}}</div>
          <div v-if="job.length">
              <JobList :job="job" />
          </div>
          <div v-else> 
              <Spinner />
          </div>

          <div v-if="education.length">
            <div v-for="education in educations" :key="education.id">
               <SingleEducation :education="education" />
            </div>
          </div>
      </div>
  </div>
  </div>

</template>

<script>
import JobList from '../components/JobList'
import getJobs from '../composables/getJobs'
import Spinner from'../components/Spinner.vue'
import SingleEducation from '../components/SingleEducation'


export default {
    components: { JobList, Spinner , SingleEducation }, 

    data() {
        return{
            education: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/educations')
        .then(res => res.json())
        .then(data =>  this.education = data)
        
    },
    
    setup() {
       const { job, error, load } = getJobs()

        load()

        return { job , error }
    }

}
</script>
