<template>
    <div>
      <q-card class="q-mb-md">
        <familyMembershipRead :id="id" />
    </q-card>
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
            id: +this.$route.params.rId
        }
    },
}
</script>
