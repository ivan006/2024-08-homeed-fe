<template>
    <div>
        <schoolFamilyEnrollmentList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import schoolFamilyEnrollmentList from 'src/views/lists/school-family-enrollments/SchoolFamilyEnrollmentList.vue'

export default {
    name: 'SchoolFamilyEnrollment-list-controller',
    components: {
        schoolFamilyEnrollmentList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>