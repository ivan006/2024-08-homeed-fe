<template>
    <div>
        <postTagList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import postTagList from 'src/views/lists/post-tags/PostTagList.vue'

export default {
    name: 'PostTag-list-controller',
    components: {
        postTagList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>