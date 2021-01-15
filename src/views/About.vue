<template>
 <div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex p-0 m-0">
        <div class="contact m-0 ">About</div>
      </div>
      <div class="styling-box"></div>

      <div class="right col-sm-12 col-md-6 col-lg-6">
        <div class="contact-me">
          
          <div class="uppercase">Contact Details
          </div>
          <div class="contact"><i class="fas fa-phone"></i> 076-8222455</div>
          <div class="contact">Stockholm</div>
          <div class="contact">Linda.andersson@Medinstitutet.se</div> 
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
    
      .left{
       

        .contact{
          padding-top:300px;  
          padding-left: 30%;
          color:$aboutText;
          font-size: 60px;
          font-weight: 200;
        }
        
      }
      
      .right{
         .contact-me{
           .uppercase
           {
            text-transform: uppercase;
           }
          
          font-weight: 200;
          color:white;
          padding-left: 30%;
          

          .contact{
            margin-top: 10px;
            font-size: 12px;

          }

         @include medium {
           padding-top:400px;  
               
            }
         }
      }

      .styling-box{


            @include medium {
             
              border-right:white solid 1px;
              border-bottom: white solid 1px;
              position: absolute;
              width: 500px;
              height: 400px;
               
            }
       
     

      }

    
}
  
</style>