<script lang="ts" setup>
// Đề Bài 3 (Trung bình - Khó): Tính tổng tiền giỏ hàng
// Giả sử có một giỏ hàng (cart) là mảng các sản phẩm (mỗi sản phẩm có id, name, price, quantity).
// Yêu cầu:
// Dùng computed để tính:
// totalItems: Tổng số lượng sản phẩm trong giỏ.
// totalPrice: Tổng tiền (price * quantity).
// hasDiscount: Boolean (true nếu totalPrice > 100).
import { computed } from 'vue';
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const cart: Item[] = [
  {
    id: 1,
    name: 'Cake',
    price: 2,
    quantity: 3,
  },
  {
    id: 2,
    name: 'Milk',
    price: 10,
    quantity: 20,
  },
  {
    id: 3,
    name: 'Candy',
    price: 1,
    quantity: 5,
  },
];
const totalItems = computed(() => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
});
const totalPrice = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
const hasDiscount = computed(() => {
  return totalPrice.value > 100;
});
const finalPrice = computed(() => {
  return hasDiscount.value ? totalPrice.value * 0.9 : totalPrice.value;
});
</script>

<template>
  <div>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} x{{ item.quantity }} - ${{ item.price * item.quantity }}
      </li>
    </ul>
    <p>Total Items: {{ totalItems }}</p>
    <p>Total Price: ${{ totalPrice }}</p>
    <p v-if="hasDiscount">Bạn được giảm giá 10%!</p>
    <p>Final Price: ${{ finalPrice }}</p>
  </div>
</template>
