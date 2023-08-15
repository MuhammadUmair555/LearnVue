<template>
  <div class="page-container">
    <div class="page-content">
      <div>
        <button v-on:click="incrementCounter">Press to Count:</button>
        <span> ({{ count }})</span>
      </div>
      <br />
      <hr />
      <br />
      <button v-on:click="showMassage = !showMassage">Toggle Condition</button>
      <p v-if="showMassage">Vue Conditional Rendering Works!</p>
      <p v-else-if="!showMassage">
        Ohh no, Vue Conditional is Not Rendering Works!
      </p>
    </div>
    <br />
    <hr />
    <br />
    <button @click="answer = 'YES'">Choose YES</button>
    <button @click="answer = 'NO'">Choose NO</button>

    <div v-if="answer === 'YES'">
      <p style="display: inline-block">You Choose:</p>
      Yes
    </div>
    <div v-else-if="answer === 'NO'">
      <p style="display: inline-block">You Choose:</p>
      No
    </div>
    <div v-else>No Answer!</div>
    <hr />
    <div>
      <button @click="toggle">{{ isOn ? "ON" : "OFF" }}</button>
    </div>
    <div>
      <button @click="toggle">Toggle</button>
      <p v-if="isOn">This is the content to be shown/hidden.</p>
    </div>

    <button v-on:click="toggleButton">Vue Toggle</button>
  <input type="text" v-if="showHidetext" placeholder="Enter Text Here" />

    <div class="manu-pr">
      <div class="brand-logo">
        <h2 class="title">Logo Here</h2>
<!--         
        <font-awesome-icon icon="bars" />
        <font-awesome-icon :icon="isVisible ? bars : circle-xmark" /> -->
        
       <button class="mob-toggle" @click="mobToggle"  >
        
      
        <span v-if="isVisible"><font-awesome-icon icon="xmark" /></span>
        <span v-else><font-awesome-icon icon="bars" /></span>
       </button>
      </div>
     <div class="mobile-view" :class="{ 'hidden' : !isVisible}">
      <ul >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <button class="main-btn">Sign-Up</button>
      </ul>
      
     </div>
     
    </div>



  </div>
  
</template>
 
<script setup>
import { ref } from "vue";
const showMassage = ref();
const answer = ref();
const count = ref(0);
const isOn = ref();
const isVisible = ref();



const mobToggle = () =>{
  isVisible.value = !isVisible.value;
}

  
const toggle = () => {
  isOn.value = !isOn.value;
};
const incrementCounter = () => {
  count.value++;
};

const showHidetext = ref(false);
const toggleButton = () => {
  showHidetext.value = !showHidetext.value;
};
</script>