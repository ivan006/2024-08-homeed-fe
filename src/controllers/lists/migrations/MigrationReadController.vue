<template>
    <div>
        <migrationRead :id="id" />
    </div>
</template>

<script>
import migrationRead from 'src/views/lists/migration-s/MigrationRead.vue'

export default {
    name: 'Migration-read-controller',
    components: {
        migrationRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>