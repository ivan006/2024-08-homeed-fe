<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <familyRead :id="id" />
    </q-card>
    </div>
</template>

<script>
import familyRead from 'src/views/lists/families/FamilyRead.vue'

export default {
    name: 'Family-read-controller',
    components: {
        familyRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
