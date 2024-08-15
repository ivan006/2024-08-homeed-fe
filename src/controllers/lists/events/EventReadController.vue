<template>
    <div>
      <q-card class="q-mt-md">
        <eventRead :id="id" />
    </q-card>
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
            id: +this.$route.params.rId
        }
    },
}
</script>
