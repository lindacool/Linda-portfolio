<template>

<div class="container-fluid">
  <div class="row">
      <div class="left col-sm-12 col-md-7 col-lg-6 text-center">
        <div v-if="job">
          <h1>{{job.title}}</h1>
          <p>{{job.details}}</p>
        </div>
      </div>

    
  </div>
</div>

</template>

<script>
export default {
    props: ['id'],
    data(){
      return{
        job: null
      }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err =>console.log(err.message))
    }
}
</script>

<style lang="scss" scoped>

</style>