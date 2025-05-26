<template>
  <div class="riwayat-container">
    <h2>Riwayat Laporan Kerusakan</h2>

    <div v-if="laporan.length === 0" class="kosong">
      Belum ada laporan yang masuk.
    </div>

    <div class="laporan-list">
      <div class="laporan-card" v-for="(item, index) in laporan" :key="index">
        <h3>{{ item.judul }}</h3>
        <p><strong>Lokasi:</strong> {{ item.lokasi }}</p>
        <p><strong>Tanggal:</strong> {{ item.tanggal }}</p>
        <p><strong>Status:</strong> 
          <span :class="item.status === 'Selesai' ? 'selesai' : 'proses'">
            {{ item.status }}
          </span>
        </p>
        <p class="deskripsi">{{ item.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const laporan = ref([
  {
    judul: "Kursi rusak di ruang B205",
    lokasi: "Gedung B Lantai 2",
    tanggal: "2025-05-20",
    status: "Diproses",
    deskripsi: "Kursi kayu patah bagian kaki belakang, membahayakan pengguna."
  },
  {
    judul: "Lampu mati di koridor F",
    lokasi: "Gedung F Lantai 1",
    tanggal: "2025-05-18",
    status: "Selesai",
    deskripsi: "Lampu koridor depan kelas F101 sudah diganti."
  },
  {
    judul: "Lampu mati di koridor F",
    lokasi: "Gedung F Lantai 1",
    tanggal: "2025-05-18",
    status: "Selesai",
    deskripsi: "Lampu koridor depan kelas F101 sudah diganti."
  }
])
</script>

<style scoped>
.riwayat-container {
  max-width: 900px;
  margin: auto;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #004b8d;
}

.kosong {
  text-align: center;
  font-style: italic;
  color: #666;
}

.laporan-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.laporan-card {
  border: 1px solid #ddd;
  border-left: 6px solid #004b8d;
  padding: 15px 20px;
  background-color: #fdfdfd;
  border-radius: 8px;
  transition: transform 0.2s;
}

.laporan-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.laporan-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.deskripsi {
  margin-top: 10px;
  color: #444;
}

.selesai {
  color: green;
  font-weight: bold;
}

.proses {
  color: orange;
  font-weight: bold;
}
</style>
