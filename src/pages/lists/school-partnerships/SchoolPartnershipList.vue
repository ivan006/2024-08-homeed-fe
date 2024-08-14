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
import SchoolPartnership from 'src/models/orm-api/SchoolPartnership'
import router from 'src/router'

export default {
    name: 'SchoolPartnership-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return SchoolPartnership
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/school-partnerships/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>