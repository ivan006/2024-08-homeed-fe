<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
                :parentKeyValuePair="parentKeyValuePair"
                :fetchFlags="fetchFlags"
            />
        </q-card>
    </div>
</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import User from 'src/models/orm-api/User'

export default {
    name: 'User-list',
    components: {
        SuperTable,
    },

    props: {
        parentKeyValuePair: {
            type: Object,
            default: () => ({})
        },
        fetchFlags: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        superTableModel() {
            return User
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/users/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>