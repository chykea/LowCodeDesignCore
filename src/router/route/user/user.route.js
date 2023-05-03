const userRoute = [
    {
        path: '/user',
        component: () => import('../../../views/user/pages/index.vue'),
        children: [
            {
                path: 'login',
                component: () => import('../../../views/user/pages/login.page.vue'),
            },
            {
                path: 'register',
                component: () => import('../../../views/user/pages/register.page.vue'),
            }
        ]
    }
];

export default userRoute