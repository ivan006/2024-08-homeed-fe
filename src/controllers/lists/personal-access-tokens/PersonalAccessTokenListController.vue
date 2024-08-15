<template>
    <div>
        <personalAccessTokenList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import personalAccessTokenList from 'src/views/lists/personal-access-tokens/PersonalAccessTokenList.vue'

export default {
    name: 'PersonalAccessToken-list-controller',
    components: {
        personalAccessTokenList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>