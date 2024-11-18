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
