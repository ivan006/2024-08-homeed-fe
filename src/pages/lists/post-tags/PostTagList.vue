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
import PostTag from 'src/models/orm-api/PostTag'
import router from 'src/router'

export default {
    name: 'PostTag-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return PostTag
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/post-tags/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
