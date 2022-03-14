import { createRouter, createWebHashHistory } from 'vue-router';
import main from '/@/views/main.vue';
import note from '/@/views/note.vue';
import bookkeeping from '/@/views/bookkeeping.vue';
import plan from '/@/views/plan.vue';
import setting from '/@/views/setting.vue';

const routes = [
  { path: '/', name: 'main', component: main },
  { path: '/note', name: 'note', component: note },
  { path: '/bookkeeping', name: 'bookkeeping', component: bookkeeping },
  { path: '/plan', name: 'plan', component: plan },
  { path: '/setting', name: 'setting', component: setting },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
