
<script setup>
const props = defineProps({
  title: String,
  nameTitle: String,
})
</script>


<template>
 
  <p>This is Title : {{ title }} ({{ title?.length }})</p>
  <p>This is Name : {{nameTitle}}  ({{ nameTitle?.length }})</p>

</template>