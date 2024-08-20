<template>

    <div>
        <q-card class="q-mb-md" style="overflow: hidden;">
            <familyTyRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import familyTyRead from 'src/views/lists/family-ties/FamilyTyRead.vue'

export default {
    name: 'FamilyTy-read-controller',
    components: {
        familyTyRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
