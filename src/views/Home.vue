<template>
<div class="container-fluid">
    
  <div class="row">
      <div class="left col-sm-12 p-0">
        
        <video id="videoBG" autoplay muted loop>
        <source src="../assets/video/video.mp4" type="video/mp4">
        </video>
        </div>
      </div>
  </div>

</template>


<script>
export default {
    data() {
        
        return{
            title: 'Linda Andersson'
        }
    }
 
  
}
</script>

<style lang="scss" scoped>
   .container-fluid{
        background: rgb(0, 0, 0);;

          #videoBG{
              position: fixed;
              z-index: -1;
              top: 0;
              right: 0;
              width: auto;
              height: 100%;
              
              @include large {
                width: 100%;
                height: auto;
            }
          }
            }

    
        .frame{
            border: 1px solid white;
            margin-left: 50px;
           
        }

   
 </style>
