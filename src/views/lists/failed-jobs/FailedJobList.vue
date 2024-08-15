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
import FailedJob from 'src/models/orm-api/FailedJob'

export default {
    name: 'FailedJob-list',
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
            return FailedJob
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/failed-jobs/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>
