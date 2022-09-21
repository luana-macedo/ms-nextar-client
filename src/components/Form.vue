<template>
  <div
    class="
      min-h-screen
      flex
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-lg w-full space-y-8">
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-6">
              <label for="name" class=" right-0 text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                type="text"
                :value="users.name"
                name="first_name"
                id="first_name"
                autocomplete="given-name"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="email_address"
                class="block text-sm font-medium text-gray-700"
                >Email
              </label>
              <input
                type="text"
                :value="users.email"
                name="email_address"
                id="email_address"
                autocomplete="email"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="col-span-4">
              <label
                for="street_address"
                class="block text-sm font-medium text-gray-700"
                >Senha</label
              >
              <input
                type="text"
                :value="users.password"
                name="street_address"
                id="street_address"
                autocomplete="street-address"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>

            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
              <label for="city" class="block text-sm font-medium text-gray-700"
                >Telefone</label
              >
              <input
                type="text"
                :value="users.phone"
                name="city"
                id="city"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import api from "@/services/api.ts";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Input",

  setup() {
    const router = useRouter();
    const users = ref([]);
    const fetch = () =>
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
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

    onMounted(fetch);
    const fields = ["name", "email", "permissions", "phone"];
    return { users, fields };
  },
};
</script>