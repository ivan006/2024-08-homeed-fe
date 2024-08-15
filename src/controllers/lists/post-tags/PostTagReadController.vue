<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <postTagRead :id="id" />
    </q-card>
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
