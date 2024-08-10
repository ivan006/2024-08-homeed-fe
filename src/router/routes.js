const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    redirect: to => { return '/guest-registration' },
    meta: { requiresAuth: false },
    children: [
      {
        path: 'login',
        component: () => import('pages/auth/LoginPage.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'guest-registration',
        component: () => import('pages/guest-registration/guestRegistration.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: 'posts',
            name: 'posts',
            component: () => import('pages/posts/PostsListComp.vue'),
            meta: {
              breadcrumbName: 'posts',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: 'posts/:aId/:rName',
            name: 'posts/:aId/:rName',
            component: () => import('pages/posts/PostsReadComp.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: 'posts',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/attendances',
            name: '/lists/attendances',
            component: () => import('src/pages/lists/attendances/AttendanceList.vue'),
            meta: {
              breadcrumbName: 'attendances',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/attendances/:rId/:rName',
            name: '/lists/attendances/:rId/:rName',
            component: () => import('src/pages/lists/attendances/AttendanceRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/attendances',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/children',
            name: '/lists/children',
            component: () => import('src/pages/lists/children/ChildList.vue'),
            meta: {
              breadcrumbName: 'xxxx',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/children/:rId/:rName',
            name: '/lists/children/:rId/:rName',
            component: () => import('src/pages/lists/children/ChildRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/posts',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/events',
            name: '/lists/events',
            component: () => import('src/pages/lists/events/EventList.vue'),
            meta: {
              breadcrumbName: 'events',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/events/:rId/:rName',
            name: '/lists/events/:rId/:rName',
            component: () => import('src/pages/lists/events/EventRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/events',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/failed-jobs',
            name: '/lists/failed-jobs',
            component: () => import('src/pages/lists/failed-jobs/FailedJobList.vue'),
            meta: {
              breadcrumbName: 'failed-jobs',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/failed-jobs/:rId/:rName',
            name: '/lists/failed-jobs/:rId/:rName',
            component: () => import('src/pages/lists/failed-jobs/FailedJobRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/failed-jobs',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/families',
            name: '/lists/families',
            component: () => import('src/pages/lists/families/FamilyList.vue'),
            meta: {
              breadcrumbName: 'families',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/families/:rId/:rName',
            name: '/lists/families/:rId/:rName',
            component: () => import('src/pages/lists/families/FamilyRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/families',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/memberships',
            name: '/lists/memberships',
            component: () => import('src/pages/lists/memberships/MembershipList.vue'),
            meta: {
              breadcrumbName: 'memberships',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/memberships/:rId/:rName',
            name: '/lists/memberships/:rId/:rName',
            component: () => import('src/pages/lists/memberships/MembershipRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/memberships',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/migrations',
            name: '/lists/migrations',
            component: () => import('src/pages/lists/migrations/MigrationList.vue'),
            meta: {
              breadcrumbName: 'migrations',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/migrations/:rId/:rName',
            name: '/lists/migrations/:rId/:rName',
            component: () => import('src/pages/lists/migrations/MigrationRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/migrations',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/password-reset-tokens',
            name: '/lists/password-reset-tokens',
            component: () => import('src/pages/lists/password-reset-tokens/PasswordResetTokenList.vue'),
            meta: {
              breadcrumbName: 'password-reset-tokens',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/password-reset-tokens/:rId/:rName',
            name: '/lists/password-reset-tokens/:rId/:rName',
            component: () => import('src/pages/lists/password-reset-tokens/PasswordResetTokenRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/password-reset-tokens',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/personal-access-tokens',
            name: '/lists/personal-access-tokens',
            component: () => import('src/pages/lists/personal-access-tokens/PersonalAccessTokenList.vue'),
            meta: {
              breadcrumbName: 'personal-access-tokens',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/personal-access-tokens/:rId/:rName',
            name: '/lists/personal-access-tokens/:rId/:rName',
            component: () => import('src/pages/lists/personal-access-tokens/PersonalAccessTokenRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/personal-access-tokens',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/post-tags',
            name: '/lists/post-tags',
            component: () => import('src/pages/lists/post-tags/PostTagList.vue'),
            meta: {
              breadcrumbName: 'post-tags',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/post-tags/:rId/:rName',
            name: '/lists/post-tags/:rId/:rName',
            component: () => import('src/pages/lists/post-tags/PostTagRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/post-tags',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/posts',
            name: '/lists/posts',
            component: () => import('src/pages/lists/posts/PostList.vue'),
            meta: {
              breadcrumbName: 'posts',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/posts/:rId/:rName',
            name: '/lists/posts/:rId/:rName',
            component: () => import('src/pages/lists/posts/PostRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/posts',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/schools',
            name: '/lists/schools',
            component: () => import('src/pages/lists/schools/SchoolList.vue'),
            meta: {
              breadcrumbName: 'schools',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/schools/:rId/:rName',
            name: '/lists/schools/:rId/:rName',
            component: () => import('src/pages/lists/schools/SchoolRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/schools',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/tags',
            name: '/lists/tags',
            component: () => import('src/pages/lists/tags/TagList.vue'),
            meta: {
              breadcrumbName: 'tags',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/tags/:rId/:rName',
            name: '/lists/tags/:rId/:rName',
            component: () => import('src/pages/lists/tags/TagRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/tags',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/users',
            name: '/lists/users',
            component: () => import('src/pages/lists/users/UserList.vue'),
            meta: {
              breadcrumbName: 'users',
              breadcrumbParent: '',
              meta: { requiresAuth: false }
            },
          },
          {
            path: '/lists/users/:rId/:rName',
            name: '/lists/users/:rId/:rName',
            component: () => import('src/pages/lists/users/UserRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParent: '/lists/users',
              meta: { requiresAuth: false }
            },
          }
        ],
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { requiresAuth: false }
  }
];

export default routes;
