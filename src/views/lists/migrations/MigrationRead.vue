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
import { SuperRecord } from 'wizweb-fe'
import Migration from 'src/models/orm-api/Migration'

export default {
    name: 'Migration-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Migration
        },
    },
}
</script>

<style scoped></style>
