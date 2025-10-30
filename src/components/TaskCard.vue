<script setup>
const props = defineProps(["task"]);
const emit = defineEmits(["remove", "toggle"]);
</script>

<template>
  <!-- <div class="card">
    <h4>{{ task.title }}</h4>
    <p>Status: {{ task.completed ? "✅ Done" : "⏳ Pending" }}</p>
    <button @click="emit('remove', task.id)">Delete</button>
    <button @click="emit('toggle', task.id)">Completed</button>
  </div> -->

  <q-card class="q-mb-md">
    <q-card-section>
      <div class="text-subtitle1">{{ task.title }}</div>
    </q-card-section>

    <p>Status: {{ task.completed ? "✅ Done" : "⏳ Pending" }}</p>

    <q-card-actions align="right">
      <q-btn
        class="q-mr-lg"
        color="negative"
        flat
        icon="delete"
        @click="$emit('remove', task.id)"
      />
      <q-btn
        color="primary"
        flat
        icon="check"
        @click="$emit('toggle', task.id)"
      />
    </q-card-actions>
  </q-card>
</template>

<!-- <style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 8px 0;
  border-radius: 6px;
}
</style> -->
