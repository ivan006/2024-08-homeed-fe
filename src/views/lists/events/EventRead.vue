<template>

            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.rId"
                :displayMapField="true"
                @initialLoadHappened="$emit('initialLoadHappened')"
            >
            </SuperRecord>
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
