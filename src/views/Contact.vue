<template >
<div class="background">
  <div class="row">
      <div class="left col-sm-12 col-md-6 col-lg-6 d-flex p-0 m-0">
        <div class="contact m-0 ">
         <div class="uppercase">Say Hi!</div>
        </div>  
      </div>
      <div class="right col-sm-12 col-md-6 col-lg-6">
        <section>
          <transition name="bunce">
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
          </transition>

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
        }
       
      }
 


</style>