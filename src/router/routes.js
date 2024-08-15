const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    redirect: to => { return '/guest-registration' },
    meta: { requiresAuth: false },
    children: [
      {
        path: 'login-old',
        component: () => import('pages/auth/LoginPageOld.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'login',
        component: () => import('pages/auth/SigninView.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'register',
        component: () => import('pages/auth/JoinView.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'guest-registration',
        component: () => import('pages/guest-registration/guestRegistration.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'my-account',
        name: 'my-account',
        component: () => import('pages/my-account/MyAccountRead.vue'),
        meta: {
          breadcrumbName: 'My Account',
          breadcrumbParentName: '',
        },
      },
      {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: '/lists/attendances',
            name: '/lists/attendances',
            component: () => import('src/pages/lists/attendances/AttendanceList.vue'),
            meta: {
              breadcrumbName: 'Attendances',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/attendances/:rId/:rName',
            name: '/lists/attendances/:rId/:rName',
            component: () => import('src/pages/lists/attendances/AttendanceRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/attendances',
            },
          },
          {
            path: '/lists/children',
            name: '/lists/children',
            component: () => import('src/pages/lists/children/ChildList.vue'),
            meta: {
              breadcrumbName: 'Children',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/children/:rId/:rName',
            name: '/lists/children/:rId/:rName',
            component: () => import('src/pages/lists/children/ChildRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/children',
            },
          },
          {
            path: '/lists/events',
            name: '/lists/events',
            component: () => import('src/pages/lists/events/EventList.vue'),
            meta: {
              breadcrumbName: 'Events',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/events/:rId/:rName',
            name: '/lists/events/:rId/:rName',
            component: () => import('src/pages/lists/events/EventRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/events',
            },
          },
          {
            path: '/lists/failed-jobs',
            name: '/lists/failed-jobs',
            component: () => import('src/pages/lists/failed-jobs/FailedJobList.vue'),
            meta: {
              breadcrumbName: 'Failed-jobs',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/failed-jobs/:rId/:rName',
            name: '/lists/failed-jobs/:rId/:rName',
            component: () => import('src/pages/lists/failed-jobs/FailedJobRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/failed-jobs',
            },
          },
          {
            path: '/lists/families',
            name: '/lists/families',
            component: () => import('src/pages/lists/families/FamilyList.vue'),
            meta: {
              breadcrumbName: 'Families',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/families/:rId/:rName',
            name: '/lists/families/:rId/:rName',
            component: () => import('src/pages/lists/families/FamilyRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/families',
            },
          },
          {
            path: '/lists/memberships',
            name: '/lists/memberships',
            component: () => import('src/pages/lists/memberships/MembershipList.vue'),
            meta: {
              breadcrumbName: 'Memberships',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/memberships/:rId/:rName',
            name: '/lists/memberships/:rId/:rName',
            component: () => import('src/pages/lists/memberships/MembershipRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/memberships',
            },
          },
          {
            path: '/lists/migrations',
            name: '/lists/migrations',
            component: () => import('src/pages/lists/migrations/MigrationList.vue'),
            meta: {
              breadcrumbName: 'Migrations',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/migrations/:rId/:rName',
            name: '/lists/migrations/:rId/:rName',
            component: () => import('src/pages/lists/migrations/MigrationRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/migrations',
            },
          },
          {
            path: '/lists/password-reset-tokens',
            name: '/lists/password-reset-tokens',
            component: () => import('src/pages/lists/password-reset-tokens/PasswordResetTokenList.vue'),
            meta: {
              breadcrumbName: 'Password-reset-tokens',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/password-reset-tokens/:rId/:rName',
            name: '/lists/password-reset-tokens/:rId/:rName',
            component: () => import('src/pages/lists/password-reset-tokens/PasswordResetTokenRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/password-reset-tokens',
            },
          },
          {
            path: '/lists/personal-access-tokens',
            name: '/lists/personal-access-tokens',
            component: () => import('src/pages/lists/personal-access-tokens/PersonalAccessTokenList.vue'),
            meta: {
              breadcrumbName: 'Personal-access-tokens',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/personal-access-tokens/:rId/:rName',
            name: '/lists/personal-access-tokens/:rId/:rName',
            component: () => import('src/pages/lists/personal-access-tokens/PersonalAccessTokenRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/personal-access-tokens',
            },
          },
          {
            path: '/lists/post-tags',
            name: '/lists/post-tags',
            component: () => import('src/pages/lists/post-tags/PostTagList.vue'),
            meta: {
              breadcrumbName: 'Post-tags',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/post-tags/:rId/:rName',
            name: '/lists/post-tags/:rId/:rName',
            component: () => import('src/pages/lists/post-tags/PostTagRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/post-tags',
            },
          },
          {
            path: '/lists/posts',
            name: '/lists/posts',
            component: () => import('src/pages/lists/posts/PostList.vue'),
            meta: {
              breadcrumbName: 'Posts',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/posts/:rId/:rName',
            name: '/lists/posts/:rId/:rName',
            component: () => import('src/pages/lists/posts/PostRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/posts',
            },
          },
          {
            path: '/lists/schools',
            name: '/lists/schools',
            component: () => import('src/pages/lists/schools/SchoolList.vue'),
            meta: {
              breadcrumbName: 'Schools',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/schools/:rId/:rName',
            name: '/lists/schools/:rId/:rName',
            component: () => import('src/pages/lists/schools/SchoolRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/schools',
            },
          },
          {
            path: '/lists/tags',
            name: '/lists/tags',
            component: () => import('src/pages/lists/tags/TagList.vue'),
            meta: {
              breadcrumbName: 'Tags',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/tags/:rId/:rName',
            name: '/lists/tags/:rId/:rName',
            component: () => import('src/pages/lists/tags/TagRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/tags',
            },
          },
          {
            path: '/lists/users',
            name: '/lists/users',
            component: () => import('src/pages/lists/users/UserList.vue'),
            meta: {
              breadcrumbName: 'Users',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/users/:rId/:rName',
            name: '/lists/users/:rId/:rName',
            component: () => import('src/pages/lists/users/UserRead.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/users',
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
