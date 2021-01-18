<template>
<div class="background">
       <div class="col-12">
        <div class="row">
        <div class="section">
      <div class="about">
        <p class="aboutMe">About me</p>
       <div class="line"></div>
        <p class="education"></p>
      </div>
  
      </div>
      </div>
  </div>
  </div>
</template>



<style lang="scss" scoped>

.background {
    background-image: url('../assets/img/linda.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    .section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .about{
      text-align: center;
      font-size: 2rem;
      color:white;
      background-color: rgba(0,0,0,0.4);
      box-shadow: 1px 2px 2px 1px rgba(0,0,0,0.4);
      z-index: 1;
      height: 700px;
      width: 310px;
      padding: 20px;
      margin-left: 42px;

        @include medium {
                padding: 70px;
            }
      .aboutMe
      {
         text-transform: uppercase;
          font-weight: 400;
        
       
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

  }
    

}



// .background {
//     // background-image: url('../assets/img/linda.jpeg');
//     background: black;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 100vh;
//     width: 100%;
    
//       .left{
       

//         .contact{
//           padding-top:300px;  
//           padding-left: 30%;
//           color:white;
//           font-size: 60px;
//           font-weight: 200;


//             @include medium {
//               padding-top: 400px;
//               padding-left: 40%;
               
//             }
//             @include large {
//               padding-top: 300px;
//               padding-left: 40%;
               
//             }
//         }
        
//       }
      
//       .right{
//          .contact-me{
//            .uppercase
//            {
//             text-transform: uppercase;
//             padding: 20px 0px 10px 0px;
//            }
          
//           color:white;
//           padding-left: 30%;
          

//           .contact{
//             margin-top: 10px;
//             font-size: 12px;

//           }

//          @include medium {
//            padding-top:500px;  
               
//             }
//          @include large {
//            padding-top:260px;  
               
//             }

            
//          }
//       }

//       .styling-box{


//             @include medium {
//               border-right:white solid 1px;
//               border-bottom: white solid 1px;
//               position: absolute;
//               width: 500px;
//               height: 500px;
               
//             }
//             @include large {
//               width: 600px;
//               height: 400px;
               
//             }


//       }

// }
</style>