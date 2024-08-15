<template>
    <div>
        <migrationList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import migrationList from 'src/views/lists/migrations/MigrationList.vue'

export default {
    name: 'Migration-list-controller',
    components: {
        migrationList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
