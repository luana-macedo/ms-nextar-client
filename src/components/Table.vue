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
    <div class="max-w-4xl ma w-full space-y-8">
      <table id="tableComponent" class="table table-bordered table-striped">
        <thead>
          <tr
            class="
              px-6
              py-3
              text-xs
              font-medium
              leading-4
              tracking-wider
              text-left text-gray-500
              uppercase
              border-b border-gray-200
              bg-gray-50
            "
          >
            <!-- loop through each value of the fields to get the table header -->
            <th v-for="field in fields" :key="field" @click="sortTable(field)">
              {{ field }}
              <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the list get the each student data -->
          <tr v-for="item in studentData" :key="item">
            <td
              class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
              v-for="field in fields"
              :key="field"
            >
              {{ item[field] }}
            </td>
            <td
              class="
                text-sm
                font-medium
                leading-5
                text-center
                whitespace-no-wrap
                border-b border-gray-200
              "
            >
              <div class="inline-flex">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>

                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>

                <a href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-600 hover:text-red-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    //
    studentData: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
};
</script>