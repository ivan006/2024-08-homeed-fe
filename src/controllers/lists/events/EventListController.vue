<template>
    <div>
        <eventList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import eventList from 'src/views/lists/events/EventList.vue'

export default {
    name: 'Event-list-controller',
    components: {
        eventList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>