<template>
    <div>
        <passwordResetTokenList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import passwordResetTokenList from 'src/views/lists/password-reset-tokens/PasswordResetTokenList.vue'

export default {
    name: 'PasswordResetToken-list-controller',
    components: {
        passwordResetTokenList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>