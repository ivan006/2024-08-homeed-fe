<template>
    <div>
      <q-card class="q-mb-md">
        <userRead :id="id" />
    </q-card>
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
