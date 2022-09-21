<template>
    <div class="navbar bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between itens-center">
        <div class="flex items-center">
            <span class="text-gree-500 text-x1 mr-1">
                <i class="bi bi-messenger"></i>
            </span>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>

    </div>
</template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  