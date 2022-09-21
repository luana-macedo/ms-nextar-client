<template>
  <nav class="bg-white border-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
      <div class="relative flex h-8 items-center justify-between">
       
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <div class="flex flex-shrink-0 items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8781 0.5H56.7156C65.2087 0.5 72.0937 7.385 72.0937 15.8781V56.7156C72.0937 65.2087 65.2087 72.0937 56.7156 72.0937H15.8781C7.385 72.0937 0.5 65.2087 0.5 56.7156V15.8781C0.5 7.385 7.385 0.5 15.8781 0.5Z"
                fill="white"
                stroke="#C4C4C4"
                stroke-miterlimit="10"
              />
              <path
                d="M16.9611 24.8258C16.9595 26.4474 17.5518 28.0136 18.6262 29.2283C19.7006 30.443 21.1826 31.2222 22.7924 31.4188C24.4021 31.6153 26.0281 31.2155 27.3632 30.295C28.6982 29.3744 29.65 27.9968 30.0386 26.4223C30.3934 27.8617 31.2204 29.1406 32.3874 30.0549C33.5544 30.9691 34.9941 31.4659 36.4765 31.4659C37.959 31.4659 39.3987 30.9691 40.5657 30.0549C41.7327 29.1406 42.5596 27.8617 42.9145 26.4223C43.3079 27.9913 44.2609 29.3625 45.5942 30.2782C46.9276 31.1939 48.5495 31.5911 50.1551 31.395C51.7607 31.1989 53.2394 30.423 54.3132 29.2133C55.387 28.0036 55.9819 26.4433 55.9861 24.8258V19.3433H16.9611V24.8258Z"
                fill="#FF334C"
              />
              <path
                d="M28.4933 46.4057V54.0185H24.9241V47.0201C24.9241 45.5457 24.0677 44.4983 22.6645 44.4983C21.2613 44.4983 20.1178 45.6169 20.1178 47.1625V54.015H16.5486V41.8306H20.0229V43.4723C20.4377 42.826 21.0077 42.2937 21.6808 41.9239C22.3539 41.5541 23.1088 41.3585 23.8768 41.355C26.637 41.355 28.4933 43.4723 28.4933 46.4057Z"
                fill="black"
              />
              <path
                d="M51.8065 41.832L49.2895 45.2102L46.8365 41.832H42.7798L47.2232 47.7641L42.418 54.0543H46.3644L49.1958 50.223L51.9346 54.0543H56.0435L51.2158 47.6704L55.6557 41.832H51.8065Z"
                fill="black"
              />
              <path
                d="M42.9287 47.8755C42.9287 44.0204 40.2645 41.3516 36.362 41.3516C32.4358 41.3516 29.6519 44.0169 29.6519 47.8233C29.6519 51.7495 32.4358 54.486 36.362 54.486C39.2409 54.486 41.7389 52.944 42.3818 50.822L39.2646 50.1316C38.8364 51.0592 37.7415 51.7495 36.4569 51.7495C34.839 51.7495 33.6493 50.631 33.3408 48.9181L42.8812 48.9419C42.9216 48.5879 42.9374 48.2316 42.9287 47.8755ZM36.2861 44.0916C37.8103 44.0916 38.9431 45.1105 39.2515 46.5221H33.3812C33.7584 45.0524 34.8081 44.0916 36.2908 44.0916H36.2861Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            class="
              sm:block
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              sm:static sm:inset-auto sm:ml-6 sm:pr-0
            "
          >
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="
                  text-gray-300
                  hover:text-blue-500
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                ><router-link to="/">Users</router-link></a
              >

              <a
                href="#"
                class="
                  text-gray-300
                  hover:text-blue-500
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                ><router-link to="/about">Profile</router-link></a
              >
              <a
                @click="logOut()"
                href="#"
                class="
                  text-gray-300
                  hover:text-blue-500
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                ><router-link to="/login">Sair</router-link></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template> 
  <script>
export default {
  name: "Navbar",

  setup(){
    const logOut = () => {
        window.localStorage.removeItem("jwtToken")
    }
    return{
        logOut
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>
  