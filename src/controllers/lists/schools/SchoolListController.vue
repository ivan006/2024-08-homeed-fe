<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <schoolList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </q-card>
    </div>
</template>

<script>
import schoolList from 'src/views/lists/schools/SchoolList.vue'

export default {
    name: 'School-list-controller',
    components: {
        schoolList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
