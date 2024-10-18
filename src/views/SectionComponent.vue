<template>
  <div>
    <div class="q-px-md q-py-sm">
      <div class="q-my-xs">
        {{label}}
      </div>
    </div>
    <q-separator />

    <div class="q-pa-md">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionComponent",
  props: {
    label: String
  }
}
</script>

<style scoped>

</style>
