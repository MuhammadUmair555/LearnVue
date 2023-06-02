<template>
   <div class="header">
    <h1> Main Header</h1>
    <div class="leftTabs">
        <ul>
        <router-view>
            <li> <router-link to="/explore">Explore</router-link> </li>
            <li><router-link to="/function">Function</router-link></li>
        </router-view>
            <li>Function Page</li>
            <li>Analytic Page</li>
            <li>Comparer Page</li>
            
        </ul>

    </div>
   </div>

</template>