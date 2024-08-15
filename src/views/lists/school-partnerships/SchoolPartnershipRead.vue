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
import SchoolPartnership from 'src/models/orm-api/SchoolPartnership'

export default {
    name: 'SchoolPartnership-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return SchoolPartnership
        },
    },
}
</script>

<style scoped></style>