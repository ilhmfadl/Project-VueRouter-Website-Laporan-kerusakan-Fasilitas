<template>
  <div class="dashboard">
    <h2>Dashboard Laporan Kerusakan</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Judul Kerusakan</th>
          <th>Deskripsi</th>
          <th>Tanggal</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(laporan, index) in laporanList" :key="laporan.id">
          <td>{{ laporan.id }}</td>
          <td>{{ laporan.judul }}</td>
          <td>{{ laporan.deskripsi }}</td>
          <td>{{ laporan.tanggal }}</td>
          <td>
            <button class="btn-delete" @click="hapusLaporan(index)">Delete</button>
          </td>
        </tr>
        <tr v-if="laporanList.length === 0">
          <td colspan="5" class="kosong">Tidak ada laporan.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const laporanList = ref([
  { id: 1, judul: 'AC Rusak', deskripsi: 'AC di ruang 101 tidak dingin', tanggal: '2025-05-20' },
  { id: 2, judul: 'Lampu Mati', deskripsi: 'Lampu koridor lantai 3 mati', tanggal: '2025-05-21' },
  { id: 3, judul: 'Kunci Pintu Rusak', deskripsi: 'Kunci pintu ruang dosen rusak', tanggal: '2025-05-22' },
])

function hapusLaporan(idx) {
  const konfirmasi = confirm('Apakah anda yakin ingin menghapus laporan ini?')
  if (konfirmasi) {
    laporanList.value.splice(idx, 1)
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 25px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
}

h2 {
  margin-bottom: 20px;
  color: #004b8d;
  font-weight: 700;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

thead {
  background-color: #004b8d;
  color: white;
}

th, td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

tbody tr:hover {
  background-color: #f0f7ff;
}

.btn-delete {
  background-color: #d9534f;
  border: none;
  color: white;
  padding: 7px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-delete:hover {
  background-color: #c9302c;
}

.kosong {
  text-align: center;
  font-style: italic;
  color: #666;
  padding: 15px;
}
</style>
