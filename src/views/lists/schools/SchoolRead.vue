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
import School from 'src/models/orm-api/School'

export default {
    name: 'School-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return School
        },
    },
}
</script>

<style scoped></style>
