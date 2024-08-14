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
import PasswordResetToken from 'src/models/orm-api/PasswordResetToken'
import router from 'src/router'

export default {
    name: 'PasswordResetToken-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return PasswordResetToken
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/password-reset-tokens/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>
