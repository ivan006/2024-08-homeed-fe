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
import Family from 'src/models/orm-api/Family'
import router from 'src/router'

export default {
    name: 'Family-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Family
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/families/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
