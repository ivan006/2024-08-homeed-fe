<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
                :fetchFlags="fetchFlags"
                :currentParentRel="currentParentRel"
                />
        </q-card>
    </div>
</template>
<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import FamilyMembership from 'src/models/orm-api/FamilyMembership'
import router from 'src/router'

export default {
  name: 'FamilyMembership-list',
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
    currentParentRel: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  computed: {
      superTableModel() {
          return FamilyMembership
      },
  },
  methods: {
          openRecord(pVal, item, router) {
              router.push({
                  name: '/lists/family-memberships/:rId/:rName',
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
