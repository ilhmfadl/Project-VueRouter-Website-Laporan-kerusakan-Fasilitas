<template>
  <div id="app">
    <Header />
    <div class="layout">
      <nav class="sidebar">
        <div class="logo">
          <img src="./assets/Logo_UIR.png">
        </div>

        <router-link to="/Login">Login</router-link>
        <router-link to="/">Beranda</router-link>
        <router-link to="/lapor">Lapor Kerusakan</router-link>
        <router-link to="/riwayat">Riwayat Laporan</router-link>
        <router-link to="/tentang">Tentang Sistem</router-link>
        <router-link to="/kontak">Kontak</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
      <main class="main-content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>

.layout {
  display: flex;
  flex: 1;
}

.logo img {
  width: 120px;      
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
