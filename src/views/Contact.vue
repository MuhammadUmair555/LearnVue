
<script setup>
import { ref } from "vue";
import ContactForm from "./ContactForm.vue";
const title = ref();
const name = ref();
const attendence = ref([
  {
    name: "abc",
    attendence: "100%",
  },
  {
    name: "def",
    attendence: "90%",
  },
  {
    name: "hij",
    attendence: "20%",
  },
]);
</script>
<template>
  <div class="page-container">
    <div class="page-content">
      <h1>Contact Page</h1>
      <ContactForm name="Umair" :title="title" :nameTitle="name" />
      <input type="text" name="" id="" v-model="title" />
      <input
        v-if="title === 'umair'"
        type="text"
        name=""
        id=""
        v-model="name"
      />

      <div class="table">
        <div
          v-for="(value, index) in attendence"
          :key="index"
          class="table-row"
        >
          <div class="list">
            <h4>Name:</h4>
            <p>{{ value.name }}</p>
          </div>
          <div class="list">
            <h4>Atendence:</h4>
            <p>{{ value.attendence }}</p>
          </div>
        </div>
      </div>

      






      
    </div>
  </div>
</template>


