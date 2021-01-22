<template >
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex p-0 m-0">
        <div class="contact m-0 ">
         <p class="uppercase">Say Hi!</p>
        </div>  
      </div>
      <div class="right col-sm-12 col-md-6 col-lg-6">
        <section>

              <ul class="contact-me">
            <li class="contact"> 
              <span class="material-icons">call</span>
            076-8222455
            </li>
            <li class="contact">
              <span class="material-icons">room</span> 
                Stockholm 
            </li>
            <li class="contact">
              <a class="send-mail" href="mailto:linda.andersson@medieinstitutet.se">
              <span class="material-icons">
              email
              </span> 
              Linda.andersson@medinstitutet.se
              </a>
            </li>
          </ul>
          <div class="icones">
            <a href="https://www.linkedin.com/in/linda-andersson-4901071a9/" target="_blank"><img src="https://img.icons8.com/fluent-systems-filled/22/000000/linkedin.png"/></a>
           
            <a href="https://github.com/lindacool" target="_blank">  <img src="https://img.icons8.com/material-sharp/22/000000/github.png"/></a>
           

          </div>


        </section>
      </div>
  
  </div>
  </div>
</template>

<script>

export default {
  
    data () {
      return {
        bounce: false
      }
    }

}
</script>

<style lang="scss" scoped>

.background {
    background-color: rgba(#919891, 0.8);
    height: 100vh;
    width: 100%;
    
      .left{

        .contact{
          font-family: 'Prata', serif;
          font-size: 400;
          padding-top:300px;  
          padding-left: 25%;
          color:black;
          font-size: 60px;
          font-weight: 200;


            @include medium {
              padding-top: 400px;
              padding-left: 40%;
               
            }
            @include large {
              padding-top: 180px;
              padding-left: 40%;
               
            }
            
        }

        
      }
      
      .right{
        padding: 0;
            .contact-me{
            color:black;
            padding-left: 25%;
            font-size: 15px;
            padding-top: 10px;
            justify-content: center;
            list-style: none;

            @include medium {
            padding-top:500px;
            padding-left: 0%;
            font-size: 18px;
               
            }

            @include large {
            padding-top:260px;  
               
            }
            .material-icons{
              font-size: 16px;
              padding: 10px;

            @include medium{
              font-size: 20px;
            }

            .sthlm{
              margin-bottom: 20px;
            }
            }

           a{
             color: black;
             cursor: pointer;

             & :hover{
               text-decoration: underline;
             }
             
           }

         }
         .icones{
           margin-left: 220px;

            @include medium{
               margin-left: 150px;
            }

           img{
             padding-right: 10px;
            
           }
         }
        }
        
    p:hover {
  -webkit-animation-name: wiggle;
  -ms-animation-name: wiggle;
  -ms-animation-duration: 1000ms;
  -webkit-animation-duration: 1000ms;
  -webkit-animation-iteration-count: 1;
  -ms-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
  cursor:default;
}

@-webkit-keyframes wiggle {
  0% {-webkit-transform: rotate(10deg);}
  25% {-webkit-transform: rotate(-10deg);}
  50% {-webkit-transform: rotate(20deg);}
  75% {-webkit-transform: rotate(-5deg);}
  100% {-webkit-transform: rotate(0deg);}
}

@-ms-keyframes wiggle {
  0% {-ms-transform: rotate(1deg);}
  25% {-ms-transform: rotate(-1deg);}
  50% {-ms-transform: rotate(1.5deg);}
  75% {-ms-transform: rotate(-5deg);}
  100% {-ms-transform: rotate(0deg);}
}

@keyframes wiggle {
  0% {transform: rotate(10deg);}
  25% {transform: rotate(-10deg);}
  50% {transform: rotate(20deg);}
  75% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
}
       
      }
 


</style>