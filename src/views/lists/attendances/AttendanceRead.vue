<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.rId"
                :displayMapField="true"
            >
            </SuperRecord>
        </q-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import Attendance from 'src/models/orm-api/Attendance'

export default {
    name: 'Attendance-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Attendance
        },
    },
}
</script>

<style scoped></style>
