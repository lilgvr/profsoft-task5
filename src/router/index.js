import MainLayout from "@/layouts/main/MainLayout";
import CustomizationPage from "@/pages/customizations/CustomizationPage";
import GamePage from "@/pages/game/GamePage";
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Game',
          component: GamePage,
          meta: {
            path: '/customization',
            name: 'Customization',
          },
        },
        {
          path: '/customization',
          name: 'Customization',
          component: CustomizationPage,
          meta: {
            path: '/',
            name: 'Game',
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

export default router;
