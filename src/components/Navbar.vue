<template>
<div id="nav">
    <!-- ref tells vue that i want to have a reference in memory to this DOM-element. I can accent whenever i want -->
    <ul ref="nav">
            <div class="image-logo" @click="toggleNav">
                <span class="material-icons">menu</span>
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
            color: rgba(247, 244, 244);
            left: -150px;
            transition: 300ms ease-in;
            top: 0px;
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
        color: rgb(247, 244, 244);
         margin-left: 6px;
         font-size: 28px;
    }
    
      
        .image-logo{
                cursor: pointer;
                position: fixed;
                z-index: 1;
                top:10px;
                left: 1px;
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
                color: rgba(247, 244, 244);
            
    
                i{
                    margin-right: 7px;
                    font-size: 20px;
                    color: rgb(247, 244, 244);
                }
                
            }
    
        }

</style>
