<script lang="ts" setup>
// Đề Bài 4 (Khó): Thống kê từ trong văn bản
// Tạo một textarea, dùng computed để thống kê:
// Số từ (word count).
// Số ký tự (character count).
// Từ dài nhất trong đoạn văn.
// Yêu cầu:
// Sử dụng computed cho mỗi thống kê.
// Xử lý trim() và split() để đếm từ.
import { computed, ref } from 'vue';

const text = ref<string>('');
const wordCount = computed(() => {
  return text.value.trim().split(/\s+/).filter(Boolean).length;
});
const characterCount = computed(() => {
  return text.value.length;
});
const longestWord = computed(() => {
  const words = text.value.trim().split(/\s+/);
  return words.reduce((longest, word) => (longest.length < word.length ? word : longest), '');
});
</script>

<template>
  <div>
    <textarea
      v-model="text"
      rows="5"
      @blur="text = text.trim()"
      placeholder="Enter text here"
    ></textarea>
    <p>Số từ: {{ wordCount }}</p>
    <p>Số ký tự: {{ characterCount }}</p>
    <p>Từ dài nhất: {{ longestWord }}</p>
  </div>
</template>
