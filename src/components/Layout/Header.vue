<template>
   <div class="header">
    
    <h1 class="heartbeat" > Main Header</h1>
    <div class="leftTabs">
        <ul>
            <li> <router-link to="/">Home</router-link> </li>
            <li><router-link to="/about">About</router-link></li>
            <li> <router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li> <router-link to="/contact">Contact</router-link></li>
                       
        </ul>
        
           
        
    </div>
   </div>

</template>
<script>
  export default {
    data() {
      return {
        showRightNav: false,
        active: false,
      };
    },
    methods: {
      toggleRightNav() {
        this.showRightNav = !this.showRightNav;
      },
    },
  };
</script>