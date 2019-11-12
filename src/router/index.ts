import Vue from 'vue';
import VueRouter from 'vue-router';

import Starter from '../views/Starter.vue';
import Home from '../views/Home.vue';
import Pokedex from '../views/Pokedex.vue';
import Pokemon from '../views/Pokemon.vue';
import Game from '../views/Game.vue';
import Error404 from '../views/Error.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'starter',
    component: Starter,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex,
  },
  {
    path: '/pokedex/pokemon/:name/:id',
    name: 'pokemon',
    component: Pokemon
  },
  {
    path: '/home',
    name: 'game',
    component: Game,
  },
  {
    path: '*',
    name: 'Error',
    component: Error404,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
