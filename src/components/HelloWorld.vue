<template>
<div class="container text-center  mt-5 mb-5">
  <h1 class="mt-5 fw-bolder text-success "> User's Database </h1>
   <div class="table-responsive my-5 h-64">
    <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                "
                @click="create()"
              >
                Create user
              </button>
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
import { useRouter } from 'vue-router';

export default {
name: 'HelloWorld',
components: {
  Table
},
setup(){
  const router = useRouter();
  const users = ref([]);
  const fetch = () =>
        api
        .get("/users", {
            headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("jwtToken")}`
            }
        })
        .then((response) => (users.value = 
        response.data))
        .catch((err) => {
             if (err.response && (err.response.status === 401 || err.response.status === 403) ) {
              router.push({ name: 'login' })
             }
          });
    
    onMounted(fetch);
  const fields = [
    'name','email','permissions','phone'
  ]
  return{users,fields, create}
},
}
</script>