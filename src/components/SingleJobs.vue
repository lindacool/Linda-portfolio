<template>

    <div class="row">
      <div @click="showBody = !showBody" class="col-sm-12 col-md-7 col-lg-6 text-center project">
        <div class="title">{{job.title}}</div>
        <!-- <p> {{snippet}}</p> -->
        <div class="icons">
            <span class="material-icons">
            keyboard_arrow_down
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

<style lang="scss" scope>


</style>