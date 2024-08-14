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
import Tag from 'src/models/orm-api/Tag'
import router from 'src/router'

export default {
    name: 'Tag-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Tag
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/tags/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
