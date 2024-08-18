<template>

    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :templateListGrid="templateListGrid"
        :fetchFlags="fetchFlags"
        :viewAs="{
          hide: true,
          default: 'grid'
        }"
        :allowedFilters="[]"
    />



</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Event from 'src/models/orm-api/Event'

export default {
    name: 'Event-list',
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

    computed: {
        superTableModel() {
            return Event
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/events/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },

  data() {
    return {
      templateListGrid: {
        class: "q-pa-md q-col-gutter-md",
        cols: [
          {
            width: 12,
            dataPoint: {
              type: "function",
              function: (item) => `${item.name}`,
              label: "",
              tag: "div",
              class: "text-h6",
              hideLabel: true,
            },
          },
          {
            width: 12,
            dataPoint: {
              type: "component",
              componentPath: () => import('./EventButtonAttend.vue'),
              label: "",
              class: "text-right ",
              hideLabel: true,
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
        ],
      }
    }
  },
}
</script>
