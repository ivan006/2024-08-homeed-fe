<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <schoolPartnershipList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </q-card>
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
