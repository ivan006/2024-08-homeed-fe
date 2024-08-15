<template>
    <div>
        <familyMembershipRead :id="id" />
    </div>
</template>

<script>
import familyMembershipRead from 'src/views/lists/family-memberships/FamilyMembershipRead.vue'

export default {
    name: 'FamilyMembership-read-controller',
    components: {
        familyMembershipRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>