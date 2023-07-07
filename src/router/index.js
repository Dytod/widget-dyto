import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WidgetCuaca.vue';
import LocationWidget from '../components/WidgetLokasi.vue';
import StopwatchWidget from '../components/WidgetStopwatch.vue';
import TicTacToeWidget from '../components/WidgetTicTacToe.vue';
import PhotoWidget from '../components/WidgetRandomPhoto.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;