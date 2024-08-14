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
import School from 'src/models/orm-api/School'
import router from 'src/router'

export default {
    name: 'School-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return School
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/schools/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
