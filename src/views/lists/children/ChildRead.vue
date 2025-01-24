<template>

  <SuperRecord
      :model="superRecordModel"
      :id="+$route.params.rId"
      :displayMapField="true"
      @initialLoadHappened="$emit('initialLoadHappened')"
      :templateOverview="templateOverview"
      :allowedTabs="['overview']"
  >
  </SuperRecord>
</template>

<script>
import { SuperRecord } from 'wizweb-fe'
import Child from 'src/models/orm-api/Child'

export default {
  name: 'Child-read',
  components: { SuperRecord },
  data() {
    return {
      templateOverview: {
        cols: [
          {
            width: 12,
            class: "q-pa-md q-col-gutter-sm",
            cols: [
              {
                width: 12,
                dataPoint: {
                  field: "name",
                  tag: "div",
                  class: "text-h6",
                  hideLabel: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  hideLabel: true,
                  field: "actions",
                },
              },
              // {
              //   width: 3,
              //   dataPoint: {
              //     type: "function",
              //     function: (item) => `${item.email}`,
              //     label: "Email",
              //     // xOrientation: true,
              //   },
              // },
            ]
          },
        ],
      }
    }
  },
  computed: {
      superRecordModel() {
          return Child
      },
  },
}
</script>

<style scoped></style>
