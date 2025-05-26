<template>
  <div class="login-container">
    <h2>Login Sistem</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Masukkan username"
          required
          autocomplete="off"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Masukkan password"
          required
          autocomplete="off"
        />
      </div>

      <button type="submit" class="btn-login">Login</button>
    </form>
    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const errorMsg = ref('')

function handleLogin() {
  if (username.value === 'admin' && password.value === 'admin123') {
    alert('Login berhasil!')
  } else {
    errorMsg.value = 'Username atau password salah!'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 380px;
  margin: 80px auto;
  background: white;
  padding: 30px 35px;
  border-radius: 10px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.18);
  text-align: center;
}

h2 {
  color: #004b8d;
  font-weight: 700;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 6px;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: none;
  border-color: #004b8d;
}

.btn-login {
  width: 100%;
  background-color: #004b8d;
  color: white;
  font-weight: 700;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background-color: #0066cc;
}

.error-msg {
  margin-top: 15px;
  color: #cc0000;
  font-weight: 600;
}
</style>
