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
import PersonalAccessToken from 'src/models/orm-api/PersonalAccessToken'

export default {
    name: 'PersonalAccessToken-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return PersonalAccessToken
        },
    },
}
</script>

<style scoped></style>
