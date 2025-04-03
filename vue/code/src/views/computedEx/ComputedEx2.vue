<script lang="ts" setup>
// Đề Bài 2 (Trung bình): Lọc danh sách sản phẩm
// Tạo một danh sách sản phẩm (mảng objects có id, name, price), và một ô input để lọc sản phẩm theo tên.
// Yêu cầu:
// Dùng ref cho searchKeyword.
// Dùng computed để trả về danh sách sản phẩm đã lọc.
import { ref, computed } from 'vue';

const searchKeyword = ref<string>('');
interface Product {
  id: number;
  name: string;
  price: number;
}
const products: Product[] = [
  {
    id: 1,
    name: 'Cake',
    price: 2,
  },
  {
    id: 2,
    name: 'Milk',
    price: 10,
  },
  {
    id: 3,
    name: 'Candy',
    price: 1,
  },
];
const filteredProducts = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase();
  return products.filter(
    (product) => keyword === '' || product.name.toLowerCase().includes(keyword),
  );
});
</script>

<template>
  <div>
    <input v-model="searchKeyword" placeholder="Search..." type="text" />
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>
