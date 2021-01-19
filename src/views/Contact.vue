<template>
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex p-0 m-0">
        <div class="contact m-0 ">
         <div class="uppercase">Contact</div>
        </div>
       
      </div>
      <div class="styling-box"></div>

      <div class="right col-sm-12 col-md-6 col-lg-6">
        <div class="contact-me">
          
          <div class="uppercase">Contact
          </div>
          <div class="contact">076-8222455</div>
          <div class="contact">Stockholm</div>
          <div class="contact">Linda.andersson@Medinstitutet.se</div> 
        </div>


      </div>
  </div>
  </div>
</template>

<script>
export default {



}
</script>

<style lang="scss" scoped>

.background {
    // background-image: url('../assets/img/linda.jpeg');
    background-color: rgb(49, 48, 48);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    
      .left{
       

        .contact{
          font-family: $fontFamily;
          font-size: 400;
          padding-top:300px;  
          padding-left: 30%;
          color:white;
          font-size: 60px;
          font-weight: 200;


            @include medium {
              padding-top: 400px;
              padding-left: 40%;
               
            }
            @include large {
              padding-top: 300px;
              padding-left: 40%;
               
            }
        }
        
      }
      
      .right{
         .contact-me{
           .uppercase
           {
            text-transform: uppercase;
            padding: 20px 0px 10px 0px;
           }
          
          color:white;
          padding-left: 30%;
          

          .contact{
            margin-top: 10px;
            font-size: 12px;

          }

         @include medium {
           padding-top:500px;  
               
            }
         @include large {
           padding-top:260px;  
               
            }

            
         }
      }

      .styling-box{


            // @include medium {
            //   border-right:white solid 1px;
            //   border-bottom: white solid 1px;
            //   position: absolute;
            //   margin: 20px 0px 0px 70px;
            //   width: 500px;
            //   height: 500px;
               
            // }
            // @include large {
            //   width: 600px;
            //   height: 400px;
               
            // }

            
       
     

      }

    
}

</style>