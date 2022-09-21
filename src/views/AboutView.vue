<template>
  <div class="details-campaign">
    <div class="details-campaign__content">
      <Form />
      </div>
  </div>
</template>

<script>
  import { defineComponent} from 'vue';
  import Form from '@/components/Form.vue'

  export default defineComponent({
    name: 'AboutView',
    components: {
      Form
    },
  });
</script>

<style>
 
</style>
