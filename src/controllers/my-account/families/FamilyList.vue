<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
                :fetchFlags="fetchFlags"
                />
        </q-card>
    </div>
</template>
<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Family from 'src/models/orm-api/Family'
import router from 'src/router'

export default {
  name: 'Family-list',
  components: {
      SuperTable,
  },
  props:  {
    fetchFlags: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
      superTableModel() {
          return Family
      },
  },
  methods: {
      openRecord(pVal, item, router) {
          router.push({
              name: '/lists/families/:rId/:rName',
              params: {
                  rId: pVal,
                  rName: pVal,
              },
          })
      },
  },
}
</script>
<script setup lang="ts">
</script>
