<script setup>
import { ref } from "vue";
const title = ref("");
const emit = defineEmits(["add"]);

function addTask() {
  if (!title.value) return;
  const newTask = {
    id: Date.now(),
    title: title.value,
    completed: false,
  };
  emit("add", newTask);
  title.value = "";
}
</script>

<template>
  <!-- <form @submit.prevent="addTask">
    <input v-model="title" placeholder="New Task" />
    <button type="submit">Add</button>
  </form> -->
  <q-form @submit.prevent="addTask">
    <q-input v-model="title" filled label="Enter a new task" />
    <q-btn label="Add" type="submit" color="primary" class="q-mt-md" />
  </q-form>
</template>
