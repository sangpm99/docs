<script lang="ts" setup>
// Đề Bài 5 (Rất khó): Dependency phức tạp
// Tạo một component quản lý công việc (todo) với:
// Danh sách todos (có id, task, isCompleted).
// Một ô input để lọc todos (theo tên hoặc trạng thái isCompleted).
// computed trả về:
// incompleteTodos: Todos chưa hoàn thành.
// completedTodos: Todos đã hoàn thành.
// filteredTodos: Todos phù hợp với từ khóa tìm kiếm.
import {ref, computed} from "vue";
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}
const todos = ref<Todo[]>([
  {
    id: 1,
    task: "Mop the floor",
    isCompleted: true,
  },
  {
    id: 2,
    task: "Dish washing",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Wash clothes",
    isCompleted: false,
  }
]);
const search = ref<string>("")
const filteredTodos = computed(
  () => {
    return todos.value.filter(todo => todo.task.toLowerCase().includes(search.value.trim().toLowerCase()));
  }
)
const incompleteTodos = computed(
  () => filteredTodos.value.filter(todo => !todo.isCompleted)
)
const completedTodos = computed(
  () => filteredTodos.value.filter(todo => todo.isCompleted)
)
const toggleTodo = (id: number) => {
  const todo = todos.value.find(todo => todo.id === id);
  if(todo) todo.isCompleted = !todo.isCompleted;
}
</script>

<template>
  <div>
    <input v-model="search" placeholder="Search..." type="text" />
    <h3>Incomplete ({{ incompleteTodos.length }})</h3>
    <ul v-if="incompleteTodos.length">
        <li v-for="todo in incompleteTodos" :key="todo.id" @click="toggleTodo(todo.id)">
          {{ todo.task }}
        </li>
    </ul>
    <p v-else>No incomplete todos found.</p>
    <h3>Completed ({{ completedTodos.length }})</h3>
    <ul v-if="completedTodos.length">
      <li v-for="todo in completedTodos" :key="todo.id" @click="toggleTodo(todo.id)">
        {{ todo.task }}
      </li>
    </ul>
    <p v-else>No completed todos found.</p>
  </div>
</template>
