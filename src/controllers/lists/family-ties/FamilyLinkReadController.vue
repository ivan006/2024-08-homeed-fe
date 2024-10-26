<template>

    <div>
        <q-card class="q-mb-md" style="overflow: hidden;">
            <familyLinkRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import familyLinkRead from 'src/views/lists/family-ties/FamilyLinkRead.vue'

export default {
    name: 'FamilyLink-read-controller',
    components: {
        familyLinkRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
