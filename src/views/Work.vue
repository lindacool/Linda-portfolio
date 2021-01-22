<template>
<div class="background">
  <div class="row">
     <div class="left col-12  col-lg-2 p-0 m-0">
          <div class="contact m-0">Work</div>
     </div>
      <div class="right col-sm-12 col-md-12 col-lg-10">
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

                  <div class="icons">
                  <a :href="project.github" target="_blank"><span class="material-icons">code</span></a>
                  <button class="btn"> <span class="material-icons">
            more_horiz
            </span></button>
                  </div>
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
        title: 'My Project',
        discript: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: '',
        img: 'https://i.pinimg.com/564x/4e/3e/f5/4e3ef5c03c40ee9d2cb9b2331922f1d4.jpg'
      },
       {
        title: 'A project',
        discript: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: 'https://github.com/lindacool/Webbshop-GECKO.git',
        img: 'https://i.pinimg.com/474x/4a/65/ab/4a65ab1b3430699ab71c708f2a3983aa.jpg'
      },
        {
        title: 'Something',
        discript: 'Hed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: '',
        img: 'https://i.pinimg.com/474x/e1/1a/f8/e11af8dad7c3297e0aaba0cbdf05a360.jpg'
      },
       {
        title: 'Something',
        discript: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: '',
        img: 'https://i.pinimg.com/474x/a2/91/45/a2914594d79bdab8be667c959a8c08df.jpg'
      },
      {
        title: 'Something',
        discript: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: '',
        img: 'https://i.pinimg.com/474x/3d/96/47/3d964746c244c48e0925e081d7a6b55b.jpg'
      },
      {
        title: 'Something',
        discript: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
        github: '',
        img: 'https://i.pinimg.com/474x/12/e8/c9/12e8c9763cf65f01a2e058c68fcef3db.jpg'
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
          padding-top:50px;  
          padding-left: 30%;
          color:#ac8468;
          font-size: 60px;
          font-weight: 200;


            @include medium {
              padding-top: 80px;
              padding-left: 40%;
               
            }
            @include large {
              padding-top: 100px;
              padding-left: 50%;
              
               
            }

            
        }
        
      }
      
      .right{
        .my-work{
            display: flex;
            flex-direction: column;
            border: none;
            margin: 0px;
            margin-left: 100px;
             

               @include medium {
                 flex-direction: row;
                  flex-wrap: wrap;
                  margin-left: 90px;  
              }

               @include large {
                 margin-left: 10%; 
                 margin-top: 55px;
               
            
            }
            .card{
               text-align: center;
               border: none;
               transition: transform 2s;
               
               

                @include medium {
                 padding-left:10px;
                

                }
                @include large {
                  padding-left:5px;
            
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
                text-align: left;
                padding: 20px;
                top: 10px;
                left: 5px;
                bottom: 20px;
                right: 5px;
                background: rgba(75, 75, 75, 0.5);
                opacity: 0;
                transition:  .5s;

                 @include medium {
                   margin-left: 20px;
                    right: 10px;
                    top: 10px;
                    left: 0px;
                    bottom: 25px;
              
              }
              .title{
                 font-family: 'Prata', serif;
                 color:honeydew;
                 font-size: 15px;
              }
              .body{
                font-size: 12px;
              }
              .icons{
                margin-top: 12px;
                color: white;
                font-size: 22px;

                .btn{
                  border-radius: 25%;
                  border: solid white 1px;
                  margin-left: 160px;
                  padding: 0px 10px;
                  font-size: 10px;
                  color: white;
                }

                a{ color: white;}
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