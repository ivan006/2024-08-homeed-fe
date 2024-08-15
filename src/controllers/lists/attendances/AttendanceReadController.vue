<template>
    <div>
        <attendanceRead :id="id" />
    </div>
</template>

<script>
import attendanceRead from 'src/views/lists/attendances/AttendanceRead.vue'

export default {
    name: 'Attendance-read-controller',
    components: {
        attendanceRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>
