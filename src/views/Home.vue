<template>
  
      <div class="col-12">
        <div class="row">
        <div class="section">

      <div class="myName">
        <p class="name">{{title}}</p>
       <div class="line"></div>
        <p class="education">{{body}}</p>
       <vue-typer text='Hello'></vue-typer>
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
            title: 'linda andersson',
            body: 'front end developer'
        }
    }
 
  
}

</script>

<style lang="scss" scoped>

  .section{
    font-family: 'Prata', serif;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .myName{
      text-align: center;
      border: honeydew solid 2px;
      z-index: 1;
      padding: 20px;
      opacity: 0.8;

        @include medium {
                padding: 70px;
            }
      .name
      {
         text-transform: uppercase;
         font-family: 'Prata' 'serif';
         color:honeydew;
          font-size: 1.5rem;
       
         @include medium {
                font-size: 3rem;
            }
      }
      .education{
        font-size: 1.1rem;
        padding-top: 2px;
        color:honeydew;
        text-transform: uppercase;
         @include medium {
                font-size: 2rem;
            }
      }

      .line{
        border-bottom: 2px solid white;
        opacity: 0.8;
        width: 50px;
        margin: 20px;
        margin-left: 40%;

          @include medium {
                margin-left: 45%;
                width: 70px;
            }

           @include large {
                margin-left: 44%;
                width: 70px;
            }
        
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
