<template>
    <div>
        <postTagRead :id="id" />
    </div>
</template>

<script>
import postTagRead from 'src/views/lists/post-tags/PostTagRead.vue'

export default {
    name: 'PostTag-read-controller',
    components: {
        postTagRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
