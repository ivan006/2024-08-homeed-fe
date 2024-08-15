<template>

            <SuperRecord
                :model="superRecordModel"
                :id="+$route.params.rId"
                :displayMapField="true"
            >
            </SuperRecord>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import School from 'src/models/orm-api/School'

export default {
    name: 'School-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return School
        },
    },
}
</script>

<style scoped></style>
