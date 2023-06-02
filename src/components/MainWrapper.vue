<script setup>

import LeftSide from './Layout/LeftSide.vue';
import Header from './Layout/Header.vue';
import MainBody from './Template/MainBody.vue';

</script>

<template>
   <div class="mainWrapper">
        <LeftSide />
        <div class="root">
            <Header />
            <MainBody />
        </div>
        
   </div>

</template>