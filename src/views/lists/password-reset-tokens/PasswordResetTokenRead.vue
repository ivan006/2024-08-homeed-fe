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
import PasswordResetToken from 'src/models/orm-api/PasswordResetToken'

export default {
    name: 'PasswordResetToken-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return PasswordResetToken
        },
    },
}
</script>

<style scoped></style>