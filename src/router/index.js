import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../components/Beranda.vue'
import LaporKerusakan from '../components/LaporKerusakan.vue'
import RiwayatLaporan from '../components/RiwayatLaporan.vue'
import Tentang from '../components/Tentang.vue'
import Kontak from '../components/Kontak.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/login.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/lapor', name: 'LaporKerusakan', component: LaporKerusakan },
  { path: '/riwayat', name: 'RiwayatLaporan', component: RiwayatLaporan },
  { path: '/tentang', name: 'Tentang', component: Tentang },
  { path: '/kontak', name: 'Kontak', component: Kontak },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
