<!-- src/components/Breadcrumbs.vue -->
<template>
  <div>
    <!--<pre>{{route}}</pre>-->
    <!--<pre>{{routeMatch}}</pre>-->
    <!--<pre>{{breadcrumbs}}</pre>-->
    <!--<pre>{{lineages.length}}</pre>-->
    <q-breadcrumbs class="q-mt-md">
      <!-- Add Home breadcrumb -->
      <q-breadcrumbs-el
        class="text-subtitle2"
        :label="'Home'"
        :to="{ path: '/' }"
      />
      <q-breadcrumbs-el
        class="text-subtitle2"
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :label="getBreadcrumbName(crumb)"
        :to="{ path: '/' + crumb.path }"
      />
    </q-breadcrumbs>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
console.log(route);

function standardizePath(path) {
  return typeof path === 'string' ? path.replace(/^\//, '') : '';
}

const lineages = computed(() => {
  const result = store.$db().model('routeLineages').query().get();
  console.log(result);
  return result;
});

const routeMatch = computed(() => router.resolve(route.path));

const breadcrumbs = computed(() => {
  // Find the route pattern
  const exactMatch = routeMatch.value.matched[routeMatch.value.matched.length - 1];
  const standardizedPath = standardizePath(exactMatch.path);
  const currentRouteLineage = store.$db().model('routeLineages').query().where('path', standardizedPath).first();

  if (currentRouteLineage) {
    return currentRouteLineage.lineage.map(path => {
      return store.$db().model('routeLineages').query().where('path', standardizePath(path)).first();
    });
  }
  return [];
});

const getBreadcrumbName = (crumb) => {
  if (crumb) {
    const dynamicMatch = crumb.name.match(/:(\w+)/);
    if (dynamicMatch) {
      const paramName = dynamicMatch[1];
      return route.params[paramName] || crumb.name;
    }
    return crumb.name;
  }
  return '';
};
</script>
