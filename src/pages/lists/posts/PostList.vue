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
import Post from 'src/models/orm-api/Post'
import router from 'src/router'

export default {
    name: 'Post-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Post
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/posts/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
