<template>
<div class="row">
      <div class="left col-sm-12 col-md-7 col-lg-6 text-center">
        <div class="spin text-center"></div>
      </div>
  </div>
 
</template>

<script>
export default {

}
</script>

<style lanf="scss" >

.spin{
    display: block;
    width: 40px;
    height: 40px;;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: rgb(69, 69, 69);
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to { transform: rotate(360deg)}
}

</style>