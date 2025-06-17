<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
        <a href="#api">Weather API</a>
      </div>
      <p>&copy; 2025 WeatherScope. All rights reserved.</p>
      <p>Weather data provided by OpenWeatherMap & AccuWeather</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
}

.footer-content p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
