<template>
<div id="nav">
    <!-- ref tells vue that i want to have a reference in memory to this DOM-element. I can accent whenever i want -->
    <ul ref="nav">
            <figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" alt="LA-logo" class="menu-btn">
            </figure>

        
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

    height: 40px;
    width: 100%;
    z-index:1;
            
        ul{
            position: absolute;
            box-shadow: 1px 1px 1px #ccc;
            width: 190px;
            height: 100%;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;   
            background-color: white;
            left: -150px;
            transition: 300ms ease-in;
            top: 40px;
            z-index:1;
    
                &.active{
                    left:0px;
                }

                .nav-links{
                    top:60px;
                }
                li{ width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                   
    }
    
    
      
        figure{
                cursor: pointer;
                position: fixed;
                z-index: 1;
                top:1px;
                left: 1px;

    
                .menu-btn{
                    height:40px;
                    width: 40px;   
                    
                    
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
    
                i{
                    margin-right: 10px;
                    font-size: 15px;
                }
                
            }
    
        }
    }

</style>
