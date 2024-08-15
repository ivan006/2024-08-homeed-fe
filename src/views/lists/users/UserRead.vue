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
import User from 'src/models/orm-api/User'

export default {
    name: 'User-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return User
        },
    },
}
</script>

<style scoped></style>