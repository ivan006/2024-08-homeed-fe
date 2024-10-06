<template>
  <div>
    <!-- Use the CalendarWithMixedDataTypes component -->
    <CalendarWithMixedDataTypes :dataTypes="dataTypes" />
  </div>
</template>

<script>
import {CalendarWithMixedDataTypes} from 'quicklists-vue-orm-ui'
import Attendance from "src/models/orm-api/Attendance";
import PrivateEvent from "src/models/orm-api/PrivateEvent"; // Adjust path as needed

export default {
  name: 'ParentComponent',
  components: {
    CalendarWithMixedDataTypes,
  },
  data() {
    return {
      dataTypes: [
        {
          model: Attendance,
          clickRow(row, item) {
            console.log('Row clicked:', row, item);
          },
          parentKeyValuePair: { parentFKey: 'family_id', parentFVal: 2 },
          templateListGrid: {
            cols: [
              {
                width: 12,
                class: "q-pa-sm q-col-gutter-xs text-caption",
                dataPoint: {
                  type: "function",
                  function: (item) => `${item.event.name}`,
                  label: "Name",
                },
              },
            ]
          },
          templateListCalendar: {
            cols: [
              {
                width: 12,
                class: "q-pa-sm q-col-gutter-xs text-caption",
                cols: [
                  {
                    width: 12,
                    dataPoint: {
                      type: "function",
                      function: (item) => `${item.event.name}`,
                      label: "Name",
                    },
                  },
                  {
                    width: 12,
                    dataPoint: {
                      type: "function",
                      function: (item) => `Attendance`,
                      label: "Type",
                    },
                  },
                ],
              },
            ]
          },
        },
        {
          model: PrivateEvent,
          clickRow(row, item) {
            console.log('Row clicked:', row, item);
          },
          parentKeyValuePair: { parentFKey: 'family_id', parentFVal: this.$route.params.rId },
          templateListGrid: {
            cols: [
              {
                width: 12,
                class: "q-pa-sm q-col-gutter-xs text-caption",
                dataPoint: { field: 'name' },
              },
            ]
          },
          templateListCalendar: {
            cols: [
              {
                width: 12,
                class: "q-pa-sm q-col-gutter-xs text-caption",
                cols: [
                  {
                    width: 12,
                    dataPoint: { field: 'name' },
                  },
                  {
                    width: 12,
                    dataPoint: {
                      type: "function",
                      function: (item) => `Private Event`,
                      label: "Type",
                    },
                  },
                ],
              },
            ]
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
