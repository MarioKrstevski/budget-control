
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/transactions', component: () => import('pages/Transactions.vue') },
      { path: '/budgets', component: () => import('pages/Budgets.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/statistics', component: () => import('pages/Statistics.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    children: [],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Dashboard.vue'),
  });
}

export default routes;
