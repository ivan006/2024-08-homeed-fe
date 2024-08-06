<template>
  <q-item
    v-if="props.route"
    clickable
    tag="router-link"
    :to="props.route"
    :active-class="'q-item--highlighted'"
    :class="{ 'q-item--active': isActive, 'q-pl-lg': props.indent }"
  >
    <q-item-section avatar v-if="props.icon">
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label :style="isActive ? 'font-weight: bold;': ''">{{ props.title }}</q-item-label>
      <q-item-label v-if="props.caption" caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    v-else
    clickable
    tag="a"
    :href="props.external"
    target="_blank"
    :class="{ 'q-ml-md': props.indent }"
  >
    <q-item-section avatar v-if="props.icon">
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label v-if="props.caption" caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({
  name: 'EssentialLink'
});

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  route: {
    type: String,
    default: null
  },
  external: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: ''
  },
  activeRoute: {
    type: String,
    required: true
  },
  indent: {
    type: Boolean,
    default: false
  }
});

const isActive = computed(() => {
  return props.route && props.route === props.activeRoute;
});
</script>

<style>
.q-item--active {
  background-color: rgba(0, 31, 63, 0.1);
}
</style>
