<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <userList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </q-card>
    </div>
</template>

<script>
import userList from 'src/views/lists/users/UserList.vue'

export default {
    name: 'User-list-controller',
    components: {
        userList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
