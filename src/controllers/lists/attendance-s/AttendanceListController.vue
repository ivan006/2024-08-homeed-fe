<template>
    <div>
        <attendanceList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import attendanceList from 'src/views/lists/attendance-s/AttendanceList.vue'

export default {
    name: 'Attendance-list-controller',
    components: {
        attendanceList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>