<template>
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-4 col-lg-4 d-flex p-0 m-0">
        <div class="about m-0">
         <div class="uppercase">About me</div>
        </div>
      </div>
      <div class="right col-sm-12 col-md-4 col-lg-4">
        <div class="about-me">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
        </div>
        
         <div class="about-me-today">
          <p>Me today</p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
        </div>


      </div>
          <div class="pic col-md-4 col-lg-4">
            <!-- img on me -->
         </div>
        </div>

      </div>

</template>



<style lang="scss" scoped>
.background {
    // background-image: url('../assets/img/linda.jpeg');
    background-color: #f4f0ec;;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    
      .left{
       

        .about{
          font-family: 'Prata', serif;
          font-size: 400;
          padding-top:200px;  
          padding-left: 30%;
          color:black;
          font-size: 54px;
          font-weight: 200;


            @include medium {
              padding-top: 300px;
              padding-left: 40%;
               
            }
            @include large {
              padding-top: 300px;
              padding-left: 40%;
               
            }
        }
        
      }
      
      .right{

         .about-me{
          font-size: 12px;
          text-align: right;
          color:black;
          width: 350px;

            @include medium {
              padding-top: 450px;
              text-align: left;
              
               
            }
          
         }

        .about-me-today{
          font-size: 12px;
          text-align: right;
          color:black;
          width: 350px;

          p
          {
          font-family: 'Prata', serif;
          font-size: 15px;
          text-align: right;
          color:black;
          width: 350px;
          margin: 15px 0 5px 0;
          
        }
          
  
  }

            
         }

         .pic{
           visibility: hidden;
            @include medium {
              visibility: visible;
               
            }
         }
      }
    

// .background {
//     // background-image: url('../assets/img/linda.jpeg');
//     background-color: #f4f0ec;;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 100vh;
//     width: 100%;

//     .section{
//     position: relative;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: hidden;

    
//       .line{
//         border-bottom: 1px solid white;
//         width: 50px;
//         margin: 20px;
//         margin-left: 40%;
//       }

        
//     }

//   }

</style>