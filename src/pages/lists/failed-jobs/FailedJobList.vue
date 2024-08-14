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
import FailedJob from 'src/models/orm-api/FailedJob'
import router from 'src/router'

export default {
    name: 'FailedJob-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return FailedJob
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/failed-jobs/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
