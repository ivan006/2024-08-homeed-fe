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
import Child from 'src/models/orm-api/Child'

export default {
    name: 'Child-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Child
        },
    },
}
</script>

<style scoped></style>
