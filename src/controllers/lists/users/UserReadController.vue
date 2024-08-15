<template>
    <div>
        <userRead :id="id" />
    </div>
</template>

<script>
import userRead from 'src/views/lists/users/UserRead.vue'

export default {
    name: 'User-read-controller',
    components: {
        userRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
