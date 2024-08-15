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
import FamilyMembership from 'src/models/orm-api/FamilyMembership'

export default {
    name: 'FamilyMembership-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return FamilyMembership
        },
    },
}
</script>

<style scoped></style>
