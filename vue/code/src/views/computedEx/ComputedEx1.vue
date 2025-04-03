<script setup lang="ts">
// Tạo một component có 2 input firstName và lastName, sử dụng computed để hiển thị fullName (ghép 2 giá trị lại với dấu cách).
// Yêu cầu:
// Sử dụng ref cho firstName và lastName.
// Dùng computed để tính fullName.

import { ref, computed } from 'vue';
const firstName = ref<string>('');
const lastName = ref<string>('');
const fullName = computed({
  get() {
    return [firstName.value, lastName.value].filter(Boolean).join(' ');
  },
  set(newValue) {
    const parts = newValue.trim().split(/\s+/);
    firstName.value = parts[0];
    lastName.value = parts.splice(1).join(' ') || '';
  },
});
</script>

<template>
  <div>
    <input v-model.trim="firstName" placeholder="First Name" type="text" />
    <input v-model.trim="lastName" placeholder="Last Name" type="text" />
    <input v-model.trim="fullName" placeholder="Full Name" type="text" />
  </div>
</template>
