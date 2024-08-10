<template>
  <MainLayoutHelper>
    <template v-slot:menu>
      <template v-for="link in linksList" :key="link.title || link.groupTitle">
        <template v-if="link.groupTitle">
          <q-item-label header>{{ link.groupTitle }}</q-item-label>
          <EssentialLink
            v-for="sublink in link.links"
            :key="sublink.title"
            v-bind="sublink"
            :active-route="activeRoute"
            :indent="true"
          />
        </template>
        <template v-else>
          <EssentialLink
            v-bind="link"
            :active-route="activeRoute"
            :indent="false"
          />
        </template>
      </template>
    </template>
    <template v-slot:default>
      <q-page-container>


        <div class="q-mb-md">
          <BreadcrumbsComp />
        </div>
        <router-view @route-changed="updateActiveRoute" />
      </q-page-container>
    </template>
  </MainLayoutHelper>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue';
import MainLayoutHelper from "layouts/MainLayoutHelper.vue";
import BreadcrumbsComp from "components/BreadcrumbsComp.vue";

defineOptions({
  name: 'MainLayout'
});

const route = useRoute();
const activeRoute = ref(route.path);

watch(route, (newRoute) => {
  activeRoute.value = newRoute.path;
});

const linksList = [
  // {
  //   groupTitle: 'Journeys',
  //   links: [
  //     {
  //       title: 'Past',
  //       route: '/journeys/past'
  //     },
  //   ]
  // },
  {
    title: 'Posts',
    route: '/posts'
  },
  {
    groupTitle: 'Lists',
    links: [
      {
        title: 'Attendance S',
        route: '/lists/attendance-s',
      },
      {
        title: 'Childrens',
        route: '/lists/childrens',
      },
      {
        title: 'Events',
        route: '/lists/events',
      },
      {
        title: 'Failed Jobs',
        route: '/lists/failed-jobs',
      },
      {
        title: 'Families',
        route: '/lists/families',
      },
      {
        title: 'Memberships',
        route: '/lists/memberships',
      },
      {
        title: 'Migration S',
        route: '/lists/migration-s',
      },
      {
        title: 'Password Reset Tokens',
        route: '/lists/password-reset-tokens',
      },
      {
        title: 'Personal Access Tokens',
        route: '/lists/personal-access-tokens',
      },
      {
        title: 'Post Tags',
        route: '/lists/post-tags',
      },
      {
        title: 'Posts',
        route: '/lists/posts',
      },
      {
        title: 'Schools',
        route: '/lists/schools',
      },
      {
        title: 'Tags',
        route: '/lists/tags',
      },
      {
        title: 'Users',
        route: '/lists/users',
      }
    ],
  },
];

function updateActiveRoute(newRoute) {
  activeRoute.value = newRoute;
}
</script>
