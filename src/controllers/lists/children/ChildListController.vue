<template>
    <div>
        <childList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import childList from 'src/views/lists/children/ChildList.vue'

export default {
    name: 'Child-list-controller',
    components: {
        childList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
