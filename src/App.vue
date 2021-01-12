<template>
<div class="container-fluid m-0 p-0">
  <Navbar 
  :nav-links="navLinks"
  :image-Path="require('./assets/img/cirkel.png')"
  backgorund="#fff"
  />    
  <ProgrammicNavigation />

</div>
<!-- // Fade in animation -->
<transition
  mode="out-in"
  enter-active-class="animate__animated animate__zoomInRight delay"
  leave-active-class="animate__animated animate__zoomOutLeft"
>
  <router-view/>
</transition>
 
</template>

<script>
import ProgrammicNavigation from './components/ProgrammicNavigation.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, ProgrammicNavigation },

  data: () => ({
    navLinks: [
      {
        text: 'About',
        path: '/about',
        icon: 'ion-ios-bussniess'
      },
      {
        text: 'Resume',
        path: '/resume',
        icon: 'ion-ios-bonfire'
      },
       {
        text: 'Work',
        path: '/work',
        icon: 'ion-ios-briefcase'
      },
       {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-megaphone'
      },
    ]
  })
}
</script>

<style>
.delay{
  animation-delay: .5s;
}
  
</style>
