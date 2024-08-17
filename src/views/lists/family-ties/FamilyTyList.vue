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