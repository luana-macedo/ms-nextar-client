<template>
<div class="container text-center  mt-5 mb-5">
  <h1 class="mt-5 fw-bolder text-success "> User's Database </h1>
   <div class="table-responsive my-5">

    <!-- The table component -->
     <Table :fields='fields' :studentData ="users"></Table>
   </div>

</div>
</template>
<script>
// Importing the table component
import Table from '@/components/Table.vue'
import api from '@/services/api.ts';
import { onMounted, ref } from 'vue';
export default {
name: 'HelloWorld',
components: {
  Table
},
setup(){
  const users = ref([]);
  const fetch = () =>
        api
        .get("/users")
        .then((response) => (users.value = 
        response.data));
    
    onMounted(fetch);
  const fields = [
    'name','email','permissions','phone'
  ]
  return{users,fields}
},
}
</script>