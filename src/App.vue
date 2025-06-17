<template>
  <the-header />
  <div class="container">
    <main-location />
  </div>
  <the-footer />
</template>

<script>
import TheHeader from "./components/Section/TheHeader.vue";
import TheFooter from "./components/Section/TheFooter.vue";
import MainLocation from "./components/Location/MainLocation.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    // NeighbourLocation,
    MainLocation,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 2rem; */
}
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
  overflow-x: hidden;
}
</style>
