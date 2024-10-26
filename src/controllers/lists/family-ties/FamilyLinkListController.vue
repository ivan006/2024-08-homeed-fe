<template>

    <div>
        <q-card class="q-pa-md q-mt-md">
            <familyTyList
                :parentKeyValuePair="parentKeyValuePair"
                :fetchFlags="fetchFlags"
            />
        </q-card>
    </div>
</template>

<script>
import familyTyList from 'src/views/lists/family-ties/FamilyLinkList.vue'

export default {
    name: 'FamilyTy-list-controller',
    components: {
        familyTyList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
