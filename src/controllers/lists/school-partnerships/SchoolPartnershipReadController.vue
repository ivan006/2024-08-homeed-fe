<template>
    <div>
      <q-card class="q-mt-md">
        <schoolPartnershipRead :id="id" />
    </q-card>
    </div>
</template>

<script>
import schoolPartnershipRead from 'src/views/lists/school-partnerships/SchoolPartnershipRead.vue'

export default {
    name: 'SchoolPartnership-read-controller',
    components: {
        schoolPartnershipRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
