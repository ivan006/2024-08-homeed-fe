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
              breadcrumbName: 'Posts',
              breadcrumbParent: null,
              meta: { requiresAuth: false }
            },
          },
          {
            path: 'posts/:aId/:aName',
            name: 'posts/:aId/:aName',
            component: () => import('pages/posts/PostsReadComp.vue'),
            meta: {
              breadcrumbName: ':aName',
              breadcrumbParent: 'posts',
              meta: { requiresAuth: false }
            },
          },
        ]
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
