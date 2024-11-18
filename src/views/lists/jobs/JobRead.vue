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
import Job from 'src/models/orm-api/Job'

export default {
    name: 'Job-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Job
        },
    },
}
</script>

<style scoped></style>
