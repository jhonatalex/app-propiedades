<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <header class="container__header">
      <h1>Inmobiliaria</h1>
    </header>
    <main class="container__main">
      <router-view></router-view>
    </main>
    <footer class="container__footer">
      &copy; 2024 Inmobiliaria
    </footer>
    
  </div>

</template>

<style scoped>
@import 'styles.scss';

.logo {

  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
