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
import Post from 'src/models/orm-api/Post'

export default {
    name: 'Post-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Post
        },
    },
}
</script>

<style scoped></style>
