<template>
 <div class="background">
  <div class="row">
      <div class="left col-12  p-0 m-0">
          <div class="contact m-0 text-center ">Work</div>
          <div class="my-work">
            <div class="work card">
              <h3>Logotyp</h3>
            </div>
            <div class="work"></div>
            <div class="work"></div>
            <div class="work"></div>
          </div>
      </div>
      <div class="styling-box"></div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background {
    
      .left{
      
        .contact{
          padding-top:30px;  
          text-align: center;
          color: $workText;
          font-size: 70px;
          font-weight: 200;
          padding-left: 20px;

          @include medium {
                
            font-size: 150px;
            
            }
         
        }

         .my-work{
            display: flex;
            flex-direction: column;
            text-align: center;

               @include medium {
                 flex-direction: row;
                  flex-wrap: wrap;
                  margin-left: 9%;

            
            }
            .card{
               background-image: url('../assets/img/webbyra-vit.jpg');
               background-size: cover;
               background-color: rgb(130, 130, 130);
               background-blend-mode: multiply;
               text-align: center;
            }
          
            .work{

              margin: 1px;
              margin-left: 15%;
              
              height: 300px;
              width: 320px;
              

                @include medium {
                margin: 2px;
                height: 450px;
                width: 450px;   
            }

                @include large {
                margin: 2px;
                height: 550px;
                width: 550px;   
            }
            }
          }
        
      }

    
}
</style>