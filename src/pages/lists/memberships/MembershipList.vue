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
import Membership from 'src/models/orm-api/Membership'
import router from 'src/router'

export default {
    name: 'Membership-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return Membership
        },
    },
    methods: {
        openRecord(item) {
          console.log("item")
          console.log(item)
            this.$this.$router.push({
                name: '/lists/memberships/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: `${item.family.name} ${item.school.name}`,
                },
            })
        },
    },
}
</script>
