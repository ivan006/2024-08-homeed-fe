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
import SchoolFamilyEnrollment from 'src/models/orm-api/SchoolFamilyEnrollment'

export default {
    name: 'SchoolFamilyEnrollment-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return SchoolFamilyEnrollment
        },
    },
}
</script>

<style scoped></style>