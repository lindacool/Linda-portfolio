<template>
  
      <div class="col-12">
        <div class="row">
        <div class="section">

      <div class="myName">
        <p class="Name"> {{title}}</p>
       <div class="line"></div>
        <p class="education">{{body}}</p>
      </div>
  
      <div class="video-container">
      <video autoplay loop muted id="videoBG">
        <source src="../assets/video/hav.mp4" type="video/mp4" >
      </video>
      </div>
      </div>
      </div>
  </div>
</template>


<script>
export default {
    data() {
        
        return{
            title: 'Linda Andersson',
            body: 'Front end developer'
        }
    }
 
  
}
</script>

<style lang="scss" scoped>


  .section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .myName{
      text-align: center;
      font-size: 2rem;
      color:white;
      border: white solid 1px;
      z-index: 1;
      padding: 20px;
      opacity: 0.8;
      margin-left: 42px;

        @include medium {
                padding: 70px;
            }
      .Name
      {
         text-transform: uppercase;
          font-weight: 400;
          font-size: 1.5rem;
       
         @include medium {
                font-size: 3rem;
            }
      }
      .education{
        font-size: 1.1rem;
        padding-top: 2px;
         @include medium {
                font-size: 2rem;
            }
      }

      .line{
        border-bottom: 1px solid white;
        width: 50px;
        margin: 20px;
        margin-left: 40%;
      }

        
    }

    .video-container{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;

       #videoBG{
              position: fixed;
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
  }
 </style>
