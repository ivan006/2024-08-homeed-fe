<template>
    <div>
        <postList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import postList from 'src/views/lists/posts/PostList.vue'

export default {
    name: 'Post-list-controller',
    components: {
        postList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>