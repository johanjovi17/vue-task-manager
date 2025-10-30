import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true;
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      this.tasks = res.data;
      this.loading = false;
    },
    addTask(newTask) {
      this.tasks.push(newTask);
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      const t = this.tasks.find((x) => x.id === id);
      if (t) t.completed = !t.completed;
    },
  },
});
