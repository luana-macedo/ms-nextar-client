<template>
    <div class="home">
      <Form :users="user"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Form from '@/components/Form.vue'
  
  export default {
    name: 'Edit',
    components: {
      Form
    },
    setup() {
    const router = useRouter();
    const user = ref([]);
    const fetch = (user) =>
      api
        .get("/users/"+user._id, {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("jwtToken")}`,
          },
        })
        .then((response) => (users.value = response.data))
        .catch((err) => {
          if (
            err.response &&
            (err.response.status === 401 || err.response.status === 403)
          ) {
            router.push({ name: "login" });
          }
        });

        const edit = (user) =>
       api
        .patch("/profile/edit", users)
        .then(response => {
            router.push({ name: 'home' })
        })
        .catch((err) => console.log(err.response));

    onMounted(fetch);
    const fields = ["name", "email", "permissions", "phone"];
    return { user, fields, edit };
  },
};
</script>
  