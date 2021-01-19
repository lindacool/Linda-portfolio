<template>
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex p-0 m-0">
        <div class="contact m-0 ">
         <div class="uppercase">Say Hi!</div>
        </div>
       
      </div>
      <div class="styling-box"></div>

      <div class="right col-sm-12 col-md-6 col-lg-6">
        <div class="contact-me">
          <div class="contact"> <span class="material-icons">call</span> 076-8222455</div>
          <div class="contact"> <span class="material-icons">room</span> Stockholm</div>
          <div class="contact"><span class="material-icons">email</span> Linda.andersson@Medinstitutet.se</div> 
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
    background-color: rgba(#919891, 0.8);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    
      .left{
       

        .contact{
          font-family: 'Prata', serif;
          font-size: 400;
          padding-top:300px;  
          padding-left: 30%;
          color:black;
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
           font-size: 25px;
           .uppercase
           {
            text-transform: uppercase;
            padding: 20px 0px 10px 0px;
           }
          
          color:black;
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