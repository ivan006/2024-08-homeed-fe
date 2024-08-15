<template>
    <div>
        <familyMembershipList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import familyMembershipList from 'src/views/lists/family-memberships/FamilyMembershipList.vue'

export default {
    name: 'FamilyMembership-list-controller',
    components: {
        familyMembershipList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>