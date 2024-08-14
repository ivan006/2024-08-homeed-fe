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
import Event from 'src/models/orm-api/Event'

export default {
    name: 'Event-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Event
        },
    },
}
</script>

<style scoped></style>
