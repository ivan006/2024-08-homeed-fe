<template>
    <div>
      <q-card class="q-mb-md">
        <schoolRead :id="id" />
    </q-card>
    </div>
</template>

<script>
import schoolRead from 'src/views/lists/schools/SchoolRead.vue'

export default {
    name: 'School-read-controller',
    components: {
        schoolRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
