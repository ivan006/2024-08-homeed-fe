<template>
    <div>
        <childRead :id="id" />
    </div>
</template>

<script>
import childRead from 'src/views/lists/children/ChildRead.vue'

export default {
    name: 'Child-read-controller',
    components: {
        childRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
