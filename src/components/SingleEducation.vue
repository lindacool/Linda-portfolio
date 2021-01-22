<template>
    <div class="row">

      <div @click="showBody = !showBody" class="col-sm-12 col-md-7 col-lg-6 project">
          
            <div class="title">{{education.title}}</div>
            <div class="date">{{education.date}}</div>
             <span class="material-icons">
            more_horiz
            </span>
       
        <div v-if="showBody" class="body">
            <p class="body">{{education.body}}</p>
        </div>
      </div>

  
  </div>
    
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['education'],

    setup(props) {
        const snippet = computed(() => {
            return props.education.body.substring(0,30) + '....'
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


</style>