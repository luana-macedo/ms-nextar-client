<template>
    <div class="details-campaign">
      <div class="details-campaign__content">
        <informations
          :campaign="campaignData"
          class="basic-informations"
          @deleteCampaign="toggleDeleteModal"
        />
        </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, onMounted } from 'vue';

    import Informations from '@/components/Informations.vue';

    export default defineComponent({
      name: 'DetailsCampaign',
      components: {
        Informations
      },
    });
  </script>
  
  <style lang="scss" scoped>
    .details-campaign {
      &__header {
        margin-top: 1.75rem;
      }
  
      &__content {
        margin-top: 2rem;
  
        .basic-informations {
          margin-bottom: 2.5rem;
          max-width: 45rem;
        }
  
        .participants-card {
          margin-bottom: 4.5rem;
          max-width: 64rem;
        }
      }
    }
  </style>
  