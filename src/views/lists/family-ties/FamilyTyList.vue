<template>
    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
        :templateListGrid="templateListGrid"
        :viewAs="{
          hide: true,
          default: 'grid'
        }"
        :allowedFilters="[]"
    />
</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import FamilyTy from 'src/models/orm-api/FamilyTy'

export default {
  name: 'FamilyTy-list',
  components: {
      SuperTable,
  },

  props: {
      parentKeyValuePair: {
          type: Object,
          default: () => ({})
      },
      fetchFlags: {
          type: Object,
          default: () => ({})
      }
  },

  data() {
    return {
      templateListGrid: {
        width: 4,
        cols: [
          {
            width: 12,
            class: "q-pa-md q-col-gutter-sm",
            cols: [
              {
                width: 12,
                dataPoint: {
                  field: "family",
                },
              },
              {
                width: 12,
                dataPoint: {
                  field: "user",
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
      superTableModel() {
          return FamilyTy
      },
  },
  methods: {
      openRecord(pVal, item, router) {
          router.push({
              name: '/lists/family-ties/:rId/:rName',
              params: {
                  rId: pVal,
                  rName: pVal,
              },
          })
      },
  },
}
</script>
