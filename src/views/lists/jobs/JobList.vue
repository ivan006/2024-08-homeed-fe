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
import Job from 'src/models/orm-api/Job'

export default {
    name: 'Job-list',
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
            return Job
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/jobs/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>