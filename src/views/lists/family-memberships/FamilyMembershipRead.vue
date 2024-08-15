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
import FamilyMembership from 'src/models/orm-api/FamilyMembership'

export default {
    name: 'FamilyMembership-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return FamilyMembership
        },
    },
}
</script>

<style scoped></style>
