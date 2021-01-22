<template>

 <div class="background">
    <div class="row">
        <div id="example-2" class="left col-sm-12 col-md-6 col-lg-4  p-0 m-0">
           <div class="uppercase">Resume</div>

    </div>
        <div id="example-2" class="right col-sm-12 col-md-6 col-lg-8  p-0 m-0">
        <div class="myResemu">
                
            <div v-if="job.length">
                <div class="titleJob">Job</div>
                <JobList :job="job" />
            </div>
            <div v-else> 
                <Spinner />
            </div>

               
                <div v-if="education.length">
                    <div class="titleJob">Education</div>
                    <EducationList :education="education" />
                </div>
                <div v-else> 
                    <Spinner />
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
import EducationList from '../components/EducationList'
import getEducation from '../composables/getEducation'
import { ref } from 'vue'
import Vue from 'vue'


export default {
    components: { JobList, Spinner , EducationList }, 

    
    setup() {
       const { job, error, load } = getJobs()
        load()

       const { education , loading } = getEducation()
        loading()
    
        return { job , error , education }
    }

}

</script>

<style lang="scss" scoped>

.background{

.uppercase{
        font-family: 'Prata', serif;
        padding-top:40px;  
        padding-left: 25%;
        color:#694b39;
        font-size: 40px;
        font-weight: 200;
        text-transform: uppercase;
        @include medium {
            margin-left: 100px;
               
        }
        @include large {
            margin-left: 100px;
               
        }
}
    

    .myResemu{
        margin-left: 20px;

        @include medium {
            display: flex;
            flex-direction: row;
                 
        }
        
        @include large {
           
            margin-left: 60px;
               
        }

        .titleJob{
        font-size: 25px;
        font-family: 'Prata', serif;
        margin-left: 76px;
        text-transform: uppercase;
        padding: 15px;
        
           @include medium {
            padding-top: 100px;
             margin-left: 47px;
               
        }
           @include large {
            padding-top: 50px;
               
        }

    }
       
    }
}

    
</style>
