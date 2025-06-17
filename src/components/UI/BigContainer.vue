<template>
  <div class="parent-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.parent-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 3rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: slideInUp 1s ease-out;
}

.parent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}
@media (max-width: 768px) {
  .main-weather-card {
    padding: 1.5rem;
  }
}
</style>
