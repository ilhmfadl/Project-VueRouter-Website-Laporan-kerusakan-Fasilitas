<template>
  <div class="kontak-container">
    <h2>Kontak Kami</h2>
    <p>Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan hubungi kami melalui form berikut atau langsung via kontak di bawah ini.</p>

    <form @submit.prevent="submitPesan" novalidate>
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          type="text"
          id="nama"
          v-model="form.nama"
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Masukkan email aktif"
          required
        />
      </div>

      <div class="form-group">
        <label for="pesan">Pesan</label>
        <textarea
          id="pesan"
          v-model="form.pesan"
          placeholder="Tulis pesan Anda di sini"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn-submit">Kirim Pesan</button>
    </form>

    <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>

    <div class="info-kontak">
      <h3>Informasi Kontak</h3>
      <p><strong>Telepon:</strong> (0761) 1234567</p>
      <p><strong>Email:</strong> support@uir.ac.id</p>
      <p><strong>Alamat:</strong> Jalan HR. Soebrantas No.123, Pekanbaru</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nama: '',
  email: '',
  pesan: '',
})

const successMsg = ref('')

function submitPesan() {
  if (!form.nama.trim() || !form.email.trim() || !form.pesan.trim()) {
    alert('Mohon isi semua data dengan lengkap!')
    return
  }

  successMsg.value = 'Pesan Anda telah terkirim. Terima kasih!'
  
  form.nama = ''
  form.email = ''
  form.pesan = ''
}
</script>

<style scoped>
.kontak-container {
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
  margin-bottom: 15px;
  text-align: center;
}

p {
  margin-bottom: 25px;
  color: #333;
  text-align: center;
  font-size: 16px;
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
input[type="email"],
textarea {
  padding: 10px 12px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s;
  resize: vertical;
}

input[type="text"]:focus,
input[type="email"]:focus,
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

.info-kontak {
  margin-top: 40px;
  background-color: #f0f7ff;
  padding: 20px;
  border-radius: 8px;
  color: #004b8d;
}

.info-kontak h3 {
  margin-bottom: 15px;
  font-weight: 700;
  text-align: center;
}
</style>
