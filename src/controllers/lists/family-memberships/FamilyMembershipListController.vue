<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <familyMembershipList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </q-card>
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
