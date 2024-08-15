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
import SchoolPartnership from 'src/models/orm-api/SchoolPartnership'

export default {
    name: 'SchoolPartnership-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return SchoolPartnership
        },
    },
}
</script>

<style scoped></style>
