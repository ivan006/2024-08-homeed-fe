<template>
    <div>
        <eventRead :id="id" />
    </div>
</template>

<script>
import eventRead from 'src/views/lists/events/EventRead.vue'

export default {
    name: 'Event-read-controller',
    components: {
        eventRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>