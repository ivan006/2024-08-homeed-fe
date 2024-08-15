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
import FamilyMembership from 'src/models/orm-api/FamilyMembership'

export default {
    name: 'FamilyMembership-list',
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
            return FamilyMembership
        },
    },
    methods: {
        openRecord(id, item, router) {
            router.push({
                name: '/lists/family-memberships/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
