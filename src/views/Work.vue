<template>
<div class="background">
  <div class="row">
     <div class="left col-12  p-0 m-0">
          <div class="contact m-0">Work</div>

     </div>
      <div class="right col-sm-12 col-md-12 col-lg-12">
        <div class="row">
          <div class="my-work">
            <div v-for="project in projects" :key="project.name" class="work card">
               <img 
              :src="project.img" 
              alt="My project">
             <figure>
                <figcaption>
                  <p class="title">{{project.title}}</p>
                  <p class="body">{{project.discript}}</p>
                  <a :href="project.github"><span class="material-icons">code</span></a>
                </figcaption>
              </figure>
            </div>
          </div>
    
     </div>
         
      </div> 
     </div>
</div>

</template>

<script>
export default {

data(){
  return {
    showBody:false,
    
    projects: [
      {
        title: 'something',
        discript: 'hello',
        github: '',
        img: 'https://raw.githubusercontent.com/lindacool/Webbshop-GECKO/master/public/assets/Logo-gecko.png'
      },
       {
        title: 'something else',
        discript: 'hello',
        github: 'https://github.com/lindacool/Webbshop-GECKO.git',
        img: 'https://raw.githubusercontent.com/lindacool/Webbshop-GECKO/master/public/assets/Logo-gecko.png'
      },
        {
        title: 'something',
        discript: 'hello',
        github: '',
        img: 'https://raw.githubusercontent.com/lindacool/webbshop---Kings-of-norrland/master/img/bakgrundoheader/bakgrund2.jpg'
      },
       {
        title: 'something',
        discript: 'hello',
        github: '',
        img: 'https://raw.githubusercontent.com/lindacool/webbshop---Kings-of-norrland/master/img/bakgrundoheader/bakgrund2.jpg'
      },
      {
        title: 'something',
        discript: 'hello',
        github: '',
        img: 'https://raw.githubusercontent.com/lindacool/webbshop---Kings-of-norrland/master/img/bakgrundoheader/bakgrund2.jpg'
      },
      {
        title: 'something',
        discript: 'hello',
        github: '',
        img: 'https://raw.githubusercontent.com/lindacool/webbshop---Kings-of-norrland/master/img/bakgrundoheader/bakgrund2.jpg'
      },
    ]
    
  }
  
}

}
</script>

<style lang="scss" scoped>
.background {
      .left{

        .contact{
          font-family: 'Prata', serif;
          font-size: 400;
          padding-top:90px;  
          padding-left: 25%;
          color:black;
          font-size: 60px;
          font-weight: 200;


            @include medium {
              padding-top: 80px;
              padding-left: 40%;
               
            }
            @include large {
              padding-top: 20px;
              padding-left: 45%;
              
               
            }
        }
        
      }
      
      .right{
        .my-work{
            display: flex;
            flex-direction: column;
            text-align: center;
            border: none;
            margin: 0px;
            margin-left: 100px;
             

               @include medium {
                 flex-direction: row;
                  flex-wrap: wrap;
                  margin-left: 110px;  
              }

               @include large {
                 margin-left: 15%;  
               
            
            }
            .card{
               text-align: center;
               border: none;
               transition: transform 2s;
               
               

                @include medium {
                  width: 300px;
                  height: 250px;
                  padding: 5px;
                

                }
                @include large {
                 
            
            }

               img{
               background-size: cover;
               background-position: center;
               background-repeat: no-repeat;
               box-shadow: 1px 2px 2px rgba(136, 136, 136, 0.3);
               width: 250px;
               height: 230px;
              

                @include medium {
                  width: 300px;
                  height: 250px;

                }
                  @include large {
                

               
            
            }
               }

               

          figure{

              & :hover{
                  opacity: 1;
                }

               figcaption{
                position:absolute;
                text-align: center;
                top: 10px;
                left: 5px;
                bottom: 20px;
                right: 5px;
                background: rgba(75, 75, 75, 0.5);
                opacity: 0;
                transition:  .5s;

                 @include medium {
                   margin-left: 20px;
                    right: 0px;
              }
                 @include large {
                    
              }

              }
                
            }

          }
        
      }
        
      }
 
}


// .background{
  
// .left{
      
//         .contact{ 
//           padding: 10px 0 10px 180px;
//           color: $workText;
//           font-size: 22px;
//           text-transform: uppercase;
//           font-family: 'Prata', serif;
//           font-weight: 200;

//           @include medium {
//             font-size: 30px;
//              padding: 10px 0 10px 368px;
            
//             }
//              @include large {
//             font-size: 120px;
//             text-align: center;
//             padding: 0px;
            
//             }
         
//         }

      //    .my-work{
      //       display: flex;
      //       flex-direction: column;
      //       text-align: center;
      //       border: none;
      //       margin: 0px;
             

      //          @include medium {
      //            flex-direction: row;
      //             flex-wrap: wrap;
      //             margin-left: 5%;  
      //         }

      //          @include large {
      //           margin-left: 7%;  
            
      //       }
      //       .card{
      //          text-align: center;
      //          border: none;
      //          transition: transform 2s;
      //           width: 300px;
      //          height: 250px;
      //          margin-left:70px;
      //          margin-top: 5px;
                

      //           @include medium {
      //             width: 250px;
      //             height: 250px;

      //           }
      //           @include large {
      //             width: 500px;
      //             height: 450px;
      //              margin: 0px;
      //             padding: 2px;
            
      //       }

      //          img{
      //          background-size: cover;
      //          box-shadow: 1px 2px 3px rgba(0,0,0, 0.5);
      //          border-radius: 2%;
      //          width: 300px;
      //          height: 250px;
              

      //           @include medium {
      //             width: 300px;
      //             height: 250px;

      //           }
      //             @include large {
      //             width: 500px;
      //             height: 450px;
      //            padding: 2px;

               
            
      //       }
      //          }

               

      //     figure{

      //         & :hover{
      //             opacity: 1;
      //           }

      //          figcaption{
      //           position:absolute;
      //           text-align: center;
      //           top: 20px;
      //           left: 20px;
      //           bottom: 20px;
      //           right: 50px;
      //           background: rgba(0,0,0,0.5);
      //           opacity: 0;
      //           transition:  .5s;

      //            @include medium {
      //              margin-left: 20px;
      //               right: 0px;
      //         }
      //            @include large {
      //               right: 20px;
      //         }

      //         }
                
      //       }

          
      //       .work{

      //         margin: 1px;
      //         margin-left: 15%;
      //         height: 300px;
      //         width: 300px;
              

      //           @include medium {
      //           margin: 2px;
      //           height: 450px;
      //           width: 450px;   
      //       }

      //           @include large {
      //           margin: 2px;
      //           height: 550px;
      //           width: 550px;   
      //       }
      //       }
      //     }
        
      // }
// // ul{
// //       //   margin: 10px;
// //       //   padding: 0;
// //       //   width: 1200px;
// //       //   display: flex;
// //       //   flex-direction: column;

// //       //   li{
// //       //     list-style: none;

// //       //     .imageBox{
           
// //       //       padding-bottom: 10px;  

// //       //       figure{
// //       //         position: relative;
// //       //         margin: 0;
// //       //         padding: 0;
// //       //         overflow: hidden;

// //       //         & :hover{
// //       //             opacity: 1;
// //       //           }

// //       //          figcaption{
// //       //           position:absolute;
// //       //           text-align: center;
// //       //           top: 20px;
// //       //           left: 20px;
// //       //           bottom: 20px;
// //       //           right: 20px;
// //       //           background: blanchedalmond;
// //       //           opacity: 0;
// //       //           transition:  .5s;

// //       //         }
                

// //       //       img{
// //       //          width: 400px;
// //       //         height: 285px;

             
// //       //       }
// //       //       }
// //       //     }
// //       //   }
// //       // }

//       }


// }

</style>