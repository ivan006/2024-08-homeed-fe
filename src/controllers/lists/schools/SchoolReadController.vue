<template>
    <div>
        <schoolRead :id="id" />
    </div>
</template>

<script>
import schoolRead from 'src/views/lists/schools/SchoolRead.vue'

export default {
    name: 'School-read-controller',
    components: {
        schoolRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>