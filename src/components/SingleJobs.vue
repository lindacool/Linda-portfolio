<template>

    <div class="row">
      <div @click="showBody = !showBody" class="left col-sm-12 col-md-7 col-lg-6 text-center project">
        <h3>{{job.title}}</h3>
        <p> {{snippet}}</p>
        <div class="icons">
            <span class="material-icons">
            keyboard_arrow_down
            </span>
        </div>
        <div v-if="showBody" class="body">
            <p>{{job.body}}</p>
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

.project{
    margin: 20px;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid black;
    cursor: pointer;
}


</style>