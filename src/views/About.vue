<template>
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-4 col-lg-6 d-flex p-0 m-0">
        <div class="about m-0">
         <div class="uppercase">About me</div>
         <div class="lineDesktop"></div>
        </div>
      </div>
      <div class="right col-sm-12 col-md-4 col-lg-4">
        <div class="pic col-md-6 col-lg-6">
            <div class="image"></div>
         </div>
         <div class="line"></div>
         
        <div class="about-me">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
        </div>
        
         <div class="about-me-today">
          <p>Me today</p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
        </div>


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


          .lineDesktop{
          visibility: hidden;
          @include large {
          visibility: visible;
          width: 120px;
          border-bottom: 2px solid rgb(9, 8, 8);
          border-radius: 50%;
          margin-left: 67%;
          margin-bottom: 20px;
          }

      }
        }
        
      }
      
      .right{

         .about-me{
          font-size: 12px;
          text-align: right;
          padding-left: 30px;
          color:black;
          width: 360px;

            @include medium {
              padding-top: 75px;
              text-align: left;
              
            }
               @include large {
                padding-top: 20px;
               width: 400px;
  
            }
          
         }

        .about-me-today{
          font-size: 12px;
          text-align: right;
          padding-left: 30px;
          color:black;
          width: 360px;

          @include large {
                
               width: 400px;
  
          }
          p
          {
          font-family: 'Prata', serif;
          font-size: 15px;
          text-align: right;
          color:black;
          width: 325px;
          margin: 15px 0 5px 0;
            @include large {
                
               width: 365px;
  
          }
        }
          
  }
            
         }

         .pic{
           visibility: hidden;
            @include medium {
              visibility: visible;
            }
            .image{

              @include medium {
              background-image: url('../assets/img/linda.jpeg');
              background-position: center;
              background-repeat: no-repeat;
              border-radius: 1%;
              box-shadow: 1px 2px 2px rgba(0,0,0, 0.5);
              background-size: cover;
              margin-top: 70px;
              margin-left: 33px;
              width: 300px;
              height: 253px;
              z-index: 1;
            }

             @include large {
              margin-top: 50px;
              width: 350px;
              height: 253px;
              margin-left: 20px;
  
            }
              
            }
         }
         
      .line{
        width: 100px;
        border-bottom: 2px solid rgb(9, 8, 8);
        border-radius: 50%;
        margin-left: 67%;
        margin-bottom: 20px;

        @include medium {
          width: 150px;
          margin: 60px 0 0 0;
          margin-left: 0%;
        }

          @include large {
         visibility: hidden;
        }
        
      }

      }
    
</style>