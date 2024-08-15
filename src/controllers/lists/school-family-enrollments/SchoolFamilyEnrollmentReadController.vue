<template>
    <div>
        <schoolFamilyEnrollmentRead :id="id" />
    </div>
</template>

<script>
import schoolFamilyEnrollmentRead from 'src/views/lists/school-family-enrollments/SchoolFamilyEnrollmentRead.vue'

export default {
    name: 'SchoolFamilyEnrollment-read-controller',
    components: {
        schoolFamilyEnrollmentRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>