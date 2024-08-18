<template>
  <div class="">
    <q-img
      :src="item.image ? baseUrl+'/storage/'+item.image : ''"
      :ratio="16/5"
    >
      <div v-if="!item.image" class="absolute-full text-subtitle2 flex flex-center">
        Oops, no image found!
      </div>
    </q-img>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
});

const baseUrl = import.meta.env.VITE_API_AIVTEAMS_DOMAIN
</script>

<style scoped>

</style>
