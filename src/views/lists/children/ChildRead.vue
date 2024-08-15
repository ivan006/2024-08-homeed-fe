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
import Child from 'src/models/orm-api/Child'

export default {
    name: 'Child-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Child
        },
    },
}
</script>

<style scoped></style>