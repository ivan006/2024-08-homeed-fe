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
import PostTag from 'src/models/orm-api/PostTag'

export default {
    name: 'PostTag-list',
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
            return PostTag
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/post-tags/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>
