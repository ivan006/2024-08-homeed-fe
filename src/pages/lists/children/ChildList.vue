<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
            <SuperTable
                :showMap="true"
                :model="superTableModel"
                @clickRow="openRecord"
                :displayMapField="false"
            />
        </q-card>
    </div>
</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Child from 'src/models/orm-api/Child'
import router from 'src/router'

export default {
    name: 'Child-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Child
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/children/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
