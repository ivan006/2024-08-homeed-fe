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
import Attendance from 'src/models/orm-api/Attendance'
import router from 'src/router'

export default {
    name: 'Attendance-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Attendance
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/attendances/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: `${item.event.name} ${item.child.name}`,
                },
            })
        },
    },
}
</script>
