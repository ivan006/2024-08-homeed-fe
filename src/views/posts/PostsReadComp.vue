<template>
  <div>
    <q-card class=" q-mb-md" style="overflow: hidden;">
      <SuperRecord
        :model="Post"
        :id="+route.params.aId"
        :templateOverview="templateListGrid"
        hideRelations
        @initialLoadHappened="initialLoadHappened = true"
        :relationships="[
          // 'bookings.clients',
          // 'clients',
          // 'bookings.children',
          // 'journey.countries',
        ]"
        :templateForm="templateForm"
      >
      </SuperRecord>


    </q-card>


    <div
      v-show="initialLoadHappened"
    >
      <q-card class="q-mb-md" style="overflow: hidden;">
        <!--default-opened-->
        <q-expansion-item
          label="Passports"
          expand-separator
          class="bordered-expansion-item"
          @show="renderRooms=true"
        >
        ...
        </q-expansion-item>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import Post from "src/models/orm-api/Post";
import {SuperRecord} from "quicklists-vue-orm-ui";
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

import { ref } from 'vue';

const renderRooms = ref(false);

const initialLoadHappened = ref(false);

const templateListGrid = ref({
  class: "q-pa-md",
  cols: [
    {
      width: 12,
      dataPoint: {
        field: "name",
      },
    },
  ],
});


const templateForm = ref({
  entityName: "Post",
  cols: [
    {
      width: 12,
      dataPoint: {
        field: "name",
      },
    },
  ],
});





</script>

<style scoped>

</style>
