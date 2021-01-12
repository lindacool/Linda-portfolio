<template>

  <div class="row">
      <div class="left col-sm-12 col-md-7 col-lg-6 text-center">
        <span>Contact</span>
      </div>

      <div class="right col-sm-12">
        <span>Info</span>
      </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.row {
    background: rgb(47, 47, 47);
    height: 100vh;
    padding: 0px;

    .left{
        margin-top: 150px;

        span{
            font-size: 70px;
            margin-left: 30px;
            font-weight: 200;
            color: white;
        }
    
    }
    
     .right{
         visibility: hidden;
         
      }  
      
}

</style>