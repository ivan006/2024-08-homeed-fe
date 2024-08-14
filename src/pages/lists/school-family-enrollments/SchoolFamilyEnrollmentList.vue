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
import SchoolFamilyEnrollment from 'src/models/orm-api/SchoolFamilyEnrollment'
import router from 'src/router'

export default {
    name: 'SchoolFamilyEnrollment-list',
    components: {
        SuperTable,
    },

    computed: {
        superTableModel() {
            return SchoolFamilyEnrollment
        },
    },
    methods: {
        openRecord(item) {
            this.$router.push({
                name: '/lists/school-family-enrollments/:rId/:rName',
                params: {
                    rId: item.id,
                    rName: item.name,
                },
            })
        },
    },
}
</script>