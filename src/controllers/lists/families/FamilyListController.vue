<template>
    <div>
        <familyList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import familyList from 'src/views/lists/families/FamilyList.vue'

export default {
    name: 'Family-list-controller',
    components: {
        familyList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>