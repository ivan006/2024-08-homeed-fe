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
import Event from 'src/models/orm-api/Event'
import router from 'src/router'

export default {
    name: 'Event-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Event
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/events/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
