<template>
    <div class="page-container" >
        <div class="page-content">
    <div class="hasData">
        <button class="temp-button" @click='toggle = !toggle'> Click here </button>
        <Transition name="slide-fade">
        <h1 v-show='toggle'> Services Page</h1>
        </Transition>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi rem ad iure, quis consequuntur cumque assumenda totam, ducimus fugiat sapiente ipsam adipisci quasi esse architecto officiis dignissimos? Enim, nam! sit amet consectetur adipisicing elit. Aliquid, nisi rem ad iure, quis consequuntur cumque assumenda totam, ducimus fugiat sapiente ipsam adipisci quasi esse architecto officiis dignissimos? Enim, nam!</p>
       
    </div>
    
    </div>
       <div class="no-data-message">
            <h1>No Data Found</h1>
       </div>
    </div>
</template>

<script>
export default {
    data () {
   return {
     toggle: true
   }
 },
}

</script>