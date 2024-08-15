<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
        <passwordResetTokenRead :id="id" />
    </q-card>
    </div>
</template>

<script>
import passwordResetTokenRead from 'src/views/lists/password-reset-tokens/PasswordResetTokenRead.vue'

export default {
    name: 'PasswordResetToken-read-controller',
    components: {
        passwordResetTokenRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
