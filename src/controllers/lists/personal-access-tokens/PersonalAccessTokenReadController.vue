<template>
    <div>
        <personalAccessTokenRead :id="id" />
    </div>
</template>

<script>
import personalAccessTokenRead from 'src/views/lists/personal-access-tokens/PersonalAccessTokenRead.vue'

export default {
    name: 'PersonalAccessToken-read-controller',
    components: {
        personalAccessTokenRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
