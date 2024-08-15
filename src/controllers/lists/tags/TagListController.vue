<template>
    <div>
        <tagList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import tagList from 'src/views/lists/tags/TagList.vue'

export default {
    name: 'Tag-list-controller',
    components: {
        tagList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>