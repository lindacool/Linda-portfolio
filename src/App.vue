<template>
<div class="container-fluid m-0 p-0">
  <Navbar 
  :nav-links="navLinks"
  :image-Path="require('./assets/img/ham.png')"
  backgorund="#fff"
  /> 
</div>
<!-- // Fade in animation -->
<transition
  mode="in-out"
  enter-active-class="animate__animated animate__fadeIn delay"
  leave-active-class="animate__animated animate__fadeOut delay"
>
  <router-view/>
</transition>
</template>

<script>
import ProgrammicNavigation from './components/ProgrammicNavigation.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, ProgrammicNavigation },
  

  // Navliks to my navbar
  data: () => ({

    navLinks: [
      {
        text: 'Home',
        path: '/',
        icon: 'ion-ios-home'
      },
      {
        text: 'About',
        path: '/about',
        icon: 'ion-ios-person'
      },
      {
        text: 'Resume',
        path: '/resume',
        icon: 'ion-ios-code'
      },
       {
        text: 'Work',
        path: '/work',
        icon: 'ion-ios-briefcase'
      },
       {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-call'
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
