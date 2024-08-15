<template>
    <div>
        <passwordResetTokenRead :id="id" />
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
