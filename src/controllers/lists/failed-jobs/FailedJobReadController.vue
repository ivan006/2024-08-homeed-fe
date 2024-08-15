<template>
    <div>
        <failedJobRead :id="id" />
    </div>
</template>

<script>
import failedJobRead from 'src/views/lists/failed-jobs/FailedJobRead.vue'

export default {
    name: 'FailedJob-read-controller',
    components: {
        failedJobRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>