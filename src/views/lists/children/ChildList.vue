<template>

            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
                :parentKeyValuePair="parentKeyValuePair"
                :fetchFlags="fetchFlags"
            />

</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Child from 'src/models/orm-api/Child'

export default {
    name: 'Child-list',
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
            return Child
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/children/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>
