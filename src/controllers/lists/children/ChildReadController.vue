<template>
    <div>
        <childRead :id="id" />
    </div>
</template>

<script>
import childRead from 'src/views/lists/childrens/ChildRead.vue'

export default {
    name: 'Child-read-controller',
    components: {
        childRead,
    },

    data() {
        return {
            id: +$route.params.rId
        }
    },
}
</script>