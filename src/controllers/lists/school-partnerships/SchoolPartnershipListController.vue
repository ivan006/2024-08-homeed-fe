<template>
    <div>
        <schoolPartnershipList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import schoolPartnershipList from 'src/views/lists/school-partnerships/SchoolPartnershipList.vue'

export default {
    name: 'SchoolPartnership-list-controller',
    components: {
        schoolPartnershipList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>