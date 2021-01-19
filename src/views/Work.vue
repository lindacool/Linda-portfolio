<template>
 <div class="background">
  <div class="row">
      <div class="left col-12  p-0 m-0">
          <div class="contact m-0">Work</div>
          <div class="line"></div>
          <div class="my-work">
            <div class="work card">
               <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
             <div class="work card">
                <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
             <div class="work card">
               <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
             <div class="work card">
               <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
             <div class="work card">
               <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
             <div class="work card">
               <img src="../assets/img/webbyra-vit.jpg" alt="">
             <figure>
                <figcaption>
                  <h1>Logtyp</h1>
                  <p>lorem ipsum</p>
                </figcaption>
              </figure>
            </div>
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
          padding: 10px 0 10px 180px;
          color: $workText;
          font-size: 22px;
          text-transform: uppercase;
          font-family: 'Noto Serif', serif;
          font-weight: 200;

          @include medium {
            font-size: 30px;
             padding: 10px 0 10px 368px;
            
            }
             @include large {
            font-size: 120px;
            text-align: center;
            padding: 0px;
            
            }
         
        }

         .my-work{
            display: flex;
            flex-direction: column;
            text-align: center;
             border: none;
            margin: 0px;
             

               @include medium {
                 flex-direction: row;
                  flex-wrap: wrap;
                  margin-left: 5%;  
              }

               @include large {
                margin-left: 7%;  
            
            }
            .card{
               text-align: center;
               border: none;
               transition: transform 2s;
               margin-left:70px;
               margin-top: 5px;
                

                @include medium {
                  width: 250px;
                  height: 250px;

                }
                @include large {
                  width: 500px;
                  height: 450px;
                   margin: 0px;
                  padding: 2px;
            
            }

               img{
               background-size: cover;
               box-shadow: 1px 2px 3px rgba(0,0,0, 0.5);
               border-radius: 2%;
               width: 300px;
               height: 250px;
              

                @include medium {
                  width: 300px;
                  height: 250px;

                }
                  @include large {
                  width: 500px;
                  height: 450px;
                 padding: 2px;

               
            
            }
               }

               

          figure{

              & :hover{
                  opacity: 1;
                }

               figcaption{
                position:absolute;
                text-align: center;
                top: 20px;
                left: 20px;
                bottom: 20px;
                right: 50px;
                background: rgba(0,0,0,0.5);
                opacity: 0;
                transition:  .5s;

                 @include medium {
                   margin-left: 20px;
                    right: 0px;
              }
                 @include large {
                    right: 20px;
              }

              }
                
            }

          
            .work{

              margin: 1px;
              margin-left: 15%;
              height: 300px;
              width: 300px;
              

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
// ul{
//       //   margin: 10px;
//       //   padding: 0;
//       //   width: 1200px;
//       //   display: flex;
//       //   flex-direction: column;

//       //   li{
//       //     list-style: none;

//       //     .imageBox{
           
//       //       padding-bottom: 10px;  

//       //       figure{
//       //         position: relative;
//       //         margin: 0;
//       //         padding: 0;
//       //         overflow: hidden;

//       //         & :hover{
//       //             opacity: 1;
//       //           }

//       //          figcaption{
//       //           position:absolute;
//       //           text-align: center;
//       //           top: 20px;
//       //           left: 20px;
//       //           bottom: 20px;
//       //           right: 20px;
//       //           background: blanchedalmond;
//       //           opacity: 0;
//       //           transition:  .5s;

//       //         }
                

//       //       img{
//       //          width: 400px;
//       //         height: 285px;

             
//       //       }
//       //       }
//       //     }
//       //   }
//       // }

      }
}

</style>