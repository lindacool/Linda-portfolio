<template>
 <div class="background">
    <div class="row">
        <div class="left col-sm-12 col-md-6 col-lg-6 text-center p-0 m-0">
            <h3 class="header">Jobs</h3>
            <div v-if="job.length">
                <JobList :job="job" />
            </div>
            <div v-else> 
                <Spinner />
            </div>

                <h3 class="header">Education</h3>
                <div v-if="education.length">
                    <EducationList :education="education" />
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
import EducationList from '../components/EducationList'
import getEducation from '../composables/getEducation'
import { ref } from 'vue'


export default {
    components: { JobList, Spinner , EducationList }, 

    
    setup() {
       const { job, error, load } = getJobs()
        load()

       const { education , loading } = getEducation()
        loading()
    
        return { job , error , education}
    }

}
</script>

<style lang="scss">


.background{
    .header{
        font-family: 'Prata';
        margin: 20px 0
    }
}

    
</style>
