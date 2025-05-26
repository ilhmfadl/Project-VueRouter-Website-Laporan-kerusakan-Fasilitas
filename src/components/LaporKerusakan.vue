<template>
  <div class="lapor-container">
    <h2>Form Lapor Kerusakan</h2>
    <form @submit.prevent="submitLaporan" novalidate>
      <div class="form-group">
        <label for="judul">Judul Kerusakan</label>
        <input
          type="text"
          id="judul"
          v-model="laporan.judul"
          placeholder="Masukkan judul kerusakan"
          required
        />
      </div>

      <div class="form-group">
        <label for="deskripsi">Deskripsi Kerusakan</label>
        <textarea
          id="deskripsi"
          v-model="laporan.deskripsi"
          placeholder="Jelaskan kerusakan secara detail"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="lokasi">Lokasi Kerusakan</label>
        <input
          type="text"
          id="lokasi"
          v-model="laporan.lokasi"
          placeholder="Contoh: Ruang 101"
          required
        />
      </div>

      <div class="form-group">
        <label for="tanggal">Tanggal Lapor</label>
        <input
          type="date"
          id="tanggal"
          v-model="laporan.tanggal"
          required
        />
      </div>

      <button type="submit" class="btn-submit">Kirim Laporan</button>
    </form>

    <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const laporan = reactive({
  judul: '',
  deskripsi: '',
  lokasi: '',
  tanggal: '',
})

const successMsg = ref('')

function submitLaporan() {
  if (
    !laporan.judul.trim() ||
    !laporan.deskripsi.trim() ||
    !laporan.lokasi.trim() ||
    !laporan.tanggal
  ) {
    alert('Mohon isi semua data dengan lengkap!')
    return
  }

  successMsg.value = 'Laporan berhasil dikirim! Terima kasih.'

  laporan.judul = ''
  laporan.deskripsi = ''
  laporan.lokasi = ''
  laporan.tanggal = ''
}
</script>

<style scoped>
.lapor-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px 35px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.15);
}

h2 {
  color: #004b8d;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

input[type="text"],
input[type="date"],
textarea {
  padding: 10px 12px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s;
  resize: vertical;
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus {
  outline: none;
  border-color: #004b8d;
}

textarea {
  min-height: 100px;
}

.btn-submit {
  background-color: #004b8d;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #0066cc;
}

.success-msg {
  margin-top: 20px;
  text-align: center;
  color: #2e7d32;
  font-weight: 700;
  font-size: 16px;
}
</style>
