<template>
  <div class="details-campaign">
    <div class="details-campaign__content">
      <Input />
      </div>
  </div>
</template>

<script>
  import { defineComponent} from 'vue';
  import Input from '@/components/Input.vue'

  export default defineComponent({
    name: 'AboutView',
    components: {
      Input
    },
  });
</script>

<style>
  .details-campaign__header {
      margin-top: 1.75rem;
    }

    .details-campaign__content {
      margin-top: 2rem;
    }
      .basic-informations {
        margin-bottom: 2.5rem;
        max-width: 45rem;
      }

      .participants-card {
        margin-bottom: 4.5rem;
        max-width: 64rem;
      }
</style>
