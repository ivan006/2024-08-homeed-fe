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
import PersonalAccessToken from 'src/models/orm-api/PersonalAccessToken'

export default {
    name: 'PersonalAccessToken-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return PersonalAccessToken
        },
    },
}
</script>

<style scoped></style>
