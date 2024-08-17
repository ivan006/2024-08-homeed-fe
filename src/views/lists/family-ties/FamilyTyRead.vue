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
import FamilyTy from 'src/models/orm-api/FamilyTy'

export default {
    name: 'FamilyTy-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return FamilyTy
        },
    },
}
</script>

<style scoped></style>