<template>

            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
                :parentKeyValuePair="parentKeyValuePair"
                :fetchFlags="fetchFlags"
                noBorder
            />

</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Family from 'src/models/orm-api/Family'

export default {
    name: 'Family-list',
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
