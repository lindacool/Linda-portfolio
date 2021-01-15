<template>
  <div class="project">
      <div class="actions">
          <h3 @click="showDetails = !showDetails">{{education.title}}</h3>
      </div>
      <div v-if="showDetails" class="details">
          <p>{{education.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['education'],
    data() {
        return {
            showDetails: false
        }
    }

}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius:  4åx;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid red;
    cursor: pointer;
}

</style>