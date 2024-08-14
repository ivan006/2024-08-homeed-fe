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
import PostTag from 'src/models/orm-api/PostTag'

export default {
    name: 'PostTag-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return PostTag
        },
    },
}
</script>

<style scoped></style>
