<template>
    <div>
        <familyRead :id="id" />
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
