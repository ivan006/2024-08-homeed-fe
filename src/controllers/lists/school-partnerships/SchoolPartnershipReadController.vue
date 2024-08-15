<template>
    <div>
        <schoolPartnershipRead :id="id" />
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
            id: +$route.params.rId
        }
    },
}
</script>