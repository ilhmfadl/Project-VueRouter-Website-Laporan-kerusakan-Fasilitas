<template>
  <div class="beranda-container">
    <section class="welcome-section">
      <h1>Selamat Datang di Sistem Laporan Kerusakan Fasilitas UIR</h1>
      <p>Gunakan sistem ini untuk melaporkan kerusakan fasilitas di lingkungan kampus UIR secara cepat dan mudah.</p>
    </section>

    <section class="laporan-terbaru-section">
      <h2>Laporan Terbaru</h2>
      <div class="laporan-list">
        <div class="laporan-card" v-for="(laporan, index) in laporanTerbaru" :key="index">
          <h3>{{ laporan.judul }}</h3>
          <p>{{ laporan.deskripsi }}</p>
          <small>Dilaporkan pada: {{ laporan.tanggal }}</small>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const laporanTerbaru = ref([
  { judul: 'Kerusakan AC di Gedung B', deskripsi: 'AC tidak menyala sejak pagi.', tanggal: '25 Mei 2025' },
  { judul: 'Lampu Mati di Lorong Fakultas Hukum', deskripsi: 'Lampu padam membuat lorong gelap.', tanggal: '24 Mei 2025' },
  { judul: 'Kerusakan Toilet Lantai 3', deskripsi: 'Air terus mengalir, menyebabkan banjir.', tanggal: '23 Mei 2025' },
])
</script>

<style scoped>
.beranda-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.welcome-section {
  background-color: #e8fce8;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.welcome-section h1 {
  color: #004b8d;
  margin-bottom: 10px;
}

.laporan-terbaru-section h2 {
  color: #004b8d;
  margin-bottom: 20px;
}

.laporan-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.laporan-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.12);
}

.laporan-card h3 {
  margin-bottom: 8px;
  color: #333;
}

.laporan-card p {
  margin-bottom: 6px;
  color: #555;
}

.laporan-card small {
  color: #888;
  font-size: 13px;
}
</style>
