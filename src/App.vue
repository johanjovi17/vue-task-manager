<template>
  <!-- <header>
    <h1>Task Manager</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main> -->
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Task Manager</q-toolbar-title>
        <q-btn flat label="Home" @click="$router.push('/')" />
        <q-btn flat label="Tasks" @click="$router.push('/tasks')" />
        <q-btn flat label="About" @click="$router.push('/about')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<!-- <style scoped>
header {
  background: #35495e;
  color: white;
  padding: 10px;
}
nav a {
  color: white;
  margin: 0 5px;
  text-decoration: none;
}
</style> -->
