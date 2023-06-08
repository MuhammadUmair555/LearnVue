<template>
   <div class="page-container">
      <div class="page-content">
         <h1> About Page</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,  cumque assumenda totam, ducimus fugiat sapiente ipsam adipisci quasi esse architecto officiis dignissimos? Enim, nam!</p>
      

         <div>
            <button @click="isOpen = !isOpen" >
               toggle
            </button>
           
         </div>
         <div>
            <div v-if="isOpen">
             <h1>Umair toggle</h1>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
    };
  },
};
</script>
<style scoped>

</style>