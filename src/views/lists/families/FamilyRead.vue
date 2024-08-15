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
import Family from 'src/models/orm-api/Family'

export default {
    name: 'Family-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Family
        },
    },
}
</script>

<style scoped></style>
