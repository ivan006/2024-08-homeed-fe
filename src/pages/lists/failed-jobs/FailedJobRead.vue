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
import FailedJob from 'src/models/orm-api/FailedJob'

export default {
    name: 'FailedJob-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return FailedJob
        },
    },
}
</script>

<style scoped></style>
