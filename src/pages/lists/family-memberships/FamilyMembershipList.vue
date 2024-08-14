<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
            />
        </q-card>
    </div>
</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import FamilyMembership from 'src/models/orm-api/FamilyMembership'
import router from 'src/router'

export default {
    name: 'FamilyMembership-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return FamilyMembership
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
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