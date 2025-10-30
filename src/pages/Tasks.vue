<script setup>
import { ref, onMounted, computed } from "vue";
import { useTaskStore } from "../stores/counter";
import TaskCard from "../components/TaskCard.vue";
import AddTaskForm from "../components/AddTaskForm.vue";

const store = useTaskStore();
const showAddForm = ref(false);

onMounted(() => {
  store.fetchTasks();
});

const completedTasks = computed(() => store.tasks.filter((t) => t.completed));
</script>

<template>
  <!-- <div>
    <h2>Your Tasks</h2>
    <button @click="showAddForm = !showAddForm">
      {{ showAddForm ? "Hide Form?" : "Add New Task" }}
    </button>

    <AddTaskForm v-if="showAddForm" @add="store.addTask" />

    <div v-if="store.loading">Loading...</div>
    <div v-else>
      <TaskCard
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
        @remove="store.removeTask"
        @toggle="store.toggleTask"
      />
    </div>

    <h3>Completed: {{ completedTasks.length }}</h3>
  </div> -->

  <q-page padding>
    <h5>Tasks</h5>
    <button @click="showAddForm = !showAddForm">
      {{ showAddForm ? "Hide Form?" : "Add New Task" }}
    </button>
    <AddTaskForm v-if="showAddForm" @add="store.addTask" />

    <div v-if="store.loading">Loading...</div>
    <div v-else>
      <TaskCard
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
        @remove="store.removeTask"
        @toggle="store.toggleTask"
      />
    </div>
    <h3>Completed: {{ completedTasks.length }}</h3>
  </q-page>
</template>
