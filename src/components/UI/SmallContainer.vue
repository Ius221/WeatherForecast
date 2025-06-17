<template>
  <div class="detail-item">
    <div class="detail-label"><slot name="label"></slot></div>
    <div class="detail-value"><slot name="value"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.detail-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.detail-value {
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}
.detail-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}
</style>
