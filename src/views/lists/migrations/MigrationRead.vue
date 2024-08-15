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
import Migration from 'src/models/orm-api/Migration'

export default {
    name: 'Migration-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Migration
        },
    },
}
</script>

<style scoped></style>
