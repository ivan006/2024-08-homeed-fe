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
import Membership from 'src/models/orm-api/Membership'

export default {
    name: 'Membership-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Membership
        },
    },
}
</script>

<style scoped></style>
