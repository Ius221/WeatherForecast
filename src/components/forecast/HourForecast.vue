<template>
  <div class="forecast-container">
    <h1 class="section-title">📅 Forecast timeline</h1>

    <ul class="forecast-grid">
      <li class="time-forecast">
        <div class="time-label">Afternoon</div>
        <div class="time-value">3:00 PM</div>
        <div class="weather-icon">⛅</div>
        <div class="temperature">30°C</div>
        <div class="feels-like">Feels like 34°C</div>
        <div class="weather-desc">Mostly cloudy</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>60%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>18 km/h</span>
          </div>
          <div class="detail-row">
            <span>☔ Rain</span>
            <span>25%</span>
          </div>
        </div>
      </li>

      <li class="time-forecast">
        <div class="time-label">Evening</div>
        <div class="time-value">6:00 PM</div>
        <div class="weather-icon">🌦️</div>
        <div class="temperature">26°C</div>
        <div class="feels-like">Feels like 28°C</div>
        <div class="weather-desc">Light showers</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>75%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>20 km/h</span>
          </div>
          <div class="detail-row">
            <span>☔ Rain</span>
            <span>70%</span>
          </div>
        </div>
      </li>

      <li class="time-forecast night-time">
        <div class="time-label">Night</div>
        <div class="time-value">9:00 PM</div>
        <div class="weather-icon">🌙</div>
        <div class="temperature">20°C</div>
        <div class="feels-like">Feels like 18°C</div>
        <div class="weather-desc">Clear night</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>80%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>10 km/h</span>
          </div>
          <div class="detail-row">
            <span>☔ Rain</span>
            <span>10%</span>
          </div>
        </div>
      </li>

      <li class="time-forecast night-time">
        <div class="time-label">Late Night</div>
        <div class="time-value">12:00 AM</div>
        <div class="weather-icon">🌌</div>
        <div class="temperature">17°C</div>
        <div class="feels-like">Feels like 15°C</div>
        <div class="weather-desc">Starry night</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>90%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>6 km/h</span>
          </div>
          <div class="detail-row">
            <span>☔ Rain</span>
            <span>5%</span>
          </div>
        </div>
      </li>

      <li class="time-forecast night-time">
        <div class="time-label">Pre-Dawn</div>
        <div class="time-value">3:00 AM</div>
        <div class="weather-icon">🌫️</div>
        <div class="temperature">15°C</div>
        <div class="feels-like">Feels like 12°C</div>
        <div class="weather-desc">Light fog</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>95%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>4 km/h</span>
          </div>
          <div class="detail-row">
            <span>☔ Rain</span>
            <span>0%</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
  font-size: 1.8rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  text-align: center;
}

.forecast-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 35px 0;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.time-forecast {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px 15px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.time-forecast::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.time-forecast:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.time-label {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.time-value {
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.weather-icon {
  font-size: 48px;
  margin: 15px 0;
  display: block;
}

.temperature {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 15px 0;
}

.feels-like {
  font-size: 12px;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.weather-desc {
  font-size: 14px;
  color: #34495e;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.3;
}

.weather-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 11px;
  color: #667eea;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-icon {
  font-size: 14px;
}

.night-time {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
}

.night-time .time-label,
.night-time .time-value,
.night-time .temperature,
.night-time .weather-desc {
  color: white;
}

.night-time .weather-details {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .forecast-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }

  .time-forecast {
    padding: 20px 10px;
  }

  .weather-icon {
    font-size: 40px;
  }

  .temperature {
    font-size: 24px;
  }
}
</style>
