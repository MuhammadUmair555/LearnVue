<template>
    <div class="page-container" >
       <div class="page-data" v-if="hasData()" >
    <div class="hasData">
        
        <h1> Services Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi rem ad iure, quis consequuntur cumque assumenda totam, ducimus fugiat sapiente ipsam adipisci quasi esse architecto officiis dignissimos? Enim, nam! sit amet consectetur adipisicing elit. Aliquid, nisi rem ad iure, quis consequuntur cumque assumenda totam, ducimus fugiat sapiente ipsam adipisci quasi esse architecto officiis dignissimos? Enim, nam!</p>
       
    </div>
    
    </div>
       <div v-else class="no-data-message">
            <h1>No Data Found</h1>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: null // or undefined or any other initial value
    };
  },
  methods: {
    hasData() {
      return this.data !== null && this.data !== undefined;
    }
  }
};
</script>