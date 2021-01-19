<template>
<div id="nav">
    <!-- ref tells vue that i want to have a reference in memory to this DOM-element. I can accent whenever i want -->
    <ul ref="nav">
            <div class="image-logo" @click="toggleNav">
                <button class="menu-btn"> <span class="material-icons">
menu
</span></button>
            </div>

        
        <div class="nav-links">
        <li v-for="(link,index) in navLinks" 
        :key="index">
            <router-link 
            :to="link.path">
            
            {{link.text}}
            <i :class="link.icon"></i>
            </router-link>
        </li>
        </div>
    </ul>
  </div>
</template>


<script>
export default {
    props: ['navLinks', 'imagePath'],
    methods: {
        toggleNav (){
            const nav = this.$refs.nav.classList
            nav.contains('active') ? nav.remove('active') : nav.add('active')
        }
    }


}
</script>

<style lang="scss">

#nav{
    z-index:1;
    
            
        ul{
            position: absolute;
            // box-shadow: 1px 1px 1px rgb(241, 235, 207);
            width: 190px;
            height: 100%;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;   
            left: -145px;
            transition: 300ms ease-in;
            top: 7px;
            z-index:1;
             cursor: pointer;
    
                &.active{
                    left:0px;
                }
            .nav-links{
                margin-top:50px;
            }
               
                li{ width: 100%;
                    padding-left: 0;
                    padding-right: 0;    
                   
    }

    .material-icons{
        color: rgb(25, 24, 24);
         margin: 2px;
         font-size: 28px;

          @include medium {
            font-size: 34px;
            margin-left: -1px;
            }
    }
    
      
        .image-logo{
               

                .menu-btn{
                    cursor: pointer;
                    border-radius: 50%;
                    border: solid 1px rgb(25, 24, 24);;
                    background: none;
                    height: 45px;
                    width: 45px;
                    color: white;
                    font-size: 10px;
                    position: fixed;
                    z-index: 1;
                    top:8px;
                    left: 5px;
                    
                }
                

               
                }
            }
        
            :hover{
                color: gray;
            }
    
            a{
                text-decoration: none;
                color: black;
                display: flex;
                align-items: center;
                flex-direction: row;
                margin: 10px 5px 10px 10px;
                justify-content: space-between;
                font-weight: 200;
                color: rgb(25, 24, 24);;

                @include medium {
                    font-size: 23px;
                }
            
    
                i{
                    margin-right: 7px;
                    font-size: 20px;
                    color: rgb(25, 24, 24);

                    @include medium {
                        font-size: 25px;
                        margin-right: 4px;
                    }
                }
                
            }
    
        }

</style>
