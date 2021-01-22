<template>
    <div class="row">
      <div @click="showBody = !showBody" class="col-sm-12 col-md-7 col-lg-6 project">
        <div class="title">{{job.title}}</div>
        <div class="date">{{job.date}}</div>
        <!-- <p> {{snippet}}</p> -->
        <div class="icons">
            <span class="material-icons">
            more_horiz
            </span>
        </div>
        <div v-if="showBody" class="body">
            <p class="body">{{job.body}}</p>
        </div>
      </div>

  
  </div>
    
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['job'],

    setup(props) {
        const snippet = computed(() => {
            return props.job.body.substring(0,30) + '....'
        })

        return { snippet }
    }, 
    data() {
            return{
                showBody: false
            }
        },

}
</script>

<style lang="scss" >
.project{
    width: 300px;
    margin-left: 22%;
    text-align: left;
    padding-bottom: 20px;

    .title{
        font-size: 13px;
        font-family: 'Prata', serif;
        width: 190px;

    }
    .date{
         font-size: 12px;
    }

    
    .material-icons{
        margin-left: 70%;
        font-size: 12px;
    }

    .body{
        p{
            font-size: 12px;

        }
    }
}


</style>