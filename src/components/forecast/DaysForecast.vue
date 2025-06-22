<template>
  <div class="forecast-container" v-if="!isLoading">
    <h1 class="section-title">❄️ WeatherOutlook</h1>
    <ul class="forecast-list" v-for="(day, ind) in captureDay" :key="ind">
      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">{{ day.date }}</div>
          <div class="weather-icon">
            <img :src="day.icon" alt="" />
          </div>
          <div class="weather-desc">{{ day.desc }}</div>
        </div>
        <div class="temperature">
          <span class="temp-high">{{ day.maxTemp }}°</span>
          <span class="temp-low">{{ day.minTemp }}°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">🌅 {{ day.sunRise }}</div>
          <div class="info-item">💨 {{ day.wind }} km/h</div>
          <div class="info-item">🌇 {{ day.sunSet }}</div>
        </div>
      </li>

      <!-- <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Tomorrow</div>
          <div class="weather-icon">⛅</div>
          <div class="weather-desc">Partly cloudy</div>
        </div>
        <div class="temperature">
          <span class="temp-high">25°</span>
          <span class="temp-low">12°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 35%</div>
          <div class="info-item">💨 15 km/h</div>
          <div class="info-item">👁️ 8 km</div>
        </div>
      </li>

      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Thursday</div>
          <div class="weather-icon">🌧️</div>
          <div class="weather-desc">Light rain showers</div>
        </div>
        <div class="temperature">
          <span class="temp-high">22°</span>
          <span class="temp-low">14°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 75%</div>
          <div class="info-item">💨 18 km/h</div>
          <div class="info-item">👁️ 5 km</div>
        </div>
      </li>

      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Friday</div>
          <div class="weather-icon">⛈️</div>
          <div class="weather-desc">Thunderstorms</div>
        </div>
        <div class="temperature">
          <span class="temp-high">20°</span>
          <span class="temp-low">16°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 90%</div>
          <div class="info-item">💨 25 km/h</div>
          <div class="info-item">👁️ 3 km</div>
        </div>
      </li>

      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Saturday</div>
          <div class="weather-icon">🌤️</div>
          <div class="weather-desc">Mostly sunny</div>
        </div>
        <div class="temperature">
          <span class="temp-high">26°</span>
          <span class="temp-low">13°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 15%</div>
          <div class="info-item">💨 10 km/h</div>
          <div class="info-item">👁️ 12 km</div>
        </div>
      </li>

      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Sunday</div>
          <div class="weather-icon">☁️</div>
          <div class="weather-desc">Overcast</div>
        </div>
        <div class="temperature">
          <span class="temp-high">23°</span>
          <span class="temp-low">11°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 45%</div>
          <div class="info-item">💨 14 km/h</div>
          <div class="info-item">👁️ 7 km</div>
        </div>
      </li>

      <li class="forecast-item">
        <div class="day-info">
          <div class="day-name">Monday</div>
          <div class="weather-icon">🌦️</div>
          <div class="weather-desc">Scattered showers</div>
        </div>
        <div class="temperature">
          <span class="temp-high">21°</span>
          <span class="temp-low">13°</span>
        </div>
        <div class="additional-info">
          <div class="info-item">💧 60%</div>
          <div class="info-item">💨 16 km/h</div>
          <div class="info-item">👁️ 6 km</div>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ["isLoading", "apiResponse"],
  data() {
    return {
      captureDay: [],
    };
  },
  watch: {
    apiResponse: {
      handler(newVal) {
        if (newVal && Object.keys(newVal).length > 0) {
          this.getDay(newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getDay(fetchedRes) {
      let tempArr = [];

      for (let i = 0; i < 7; i++) {
        const common = fetchedRes.forecast.forecastday[i];
        let dateValue;
        if (i === 0) dateValue = "Today";
        else if (i === 1) dateValue = "Tomorrow";
        else
          dateValue = new Date(common.date).toLocaleDateString("en-US", {
            weekday: "long",
          });

        let tempObj = {
          date: dateValue,
          icon: common.day.condition.icon,
          maxTemp: common.day.maxtemp_c,
          minTemp: common.day.mintemp_c,
          desc: common.day.condition.text,
          sunRise: common.astro.sunrise,
          sunSet: common.astro.sunset,
          wind: common.hour[0].wind_kph,
        };
        tempArr.push(tempObj);
      }
      this.captureDay = tempArr;
      console.log(this.captureDay);
    },
  },
};
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
  max-width: 800px;
  margin: 0 auto;
  padding: 35px 0;
}

.forecast-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.forecast-item {
  background: rgba(255, 255, 255, 0.95);
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.forecast-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.day-info {
  display: flex;
  align-items: center;
  flex: 1;
}

.day-name {
  font-size: 18px;
  font-weight: 600;
  color: #2d3436;
  min-width: 100px;
}

.weather-icon {
  font-size: 32px;
  margin: 0 20px;
  min-width: 50px;
  text-align: center;
}

.weather-desc {
  color: #636e72;
  font-size: 14px;
  margin: 0 20px;
  flex: 1;
}

.temperature {
  display: flex;
  align-items: center;
  gap: 10px;
}

.temp-high {
  font-size: 24px;
  font-weight: 700;
  color: #2d3436;
}

.temp-low {
  font-size: 18px;
  color: #636e72;
}

.additional-info {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #74b9ff;
  margin-left: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 768px) {
  .forecast-item {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .day-info {
    flex-direction: column;
    margin-bottom: 15px;
  }

  .weather-icon {
    margin: 10px 0;
  }

  .additional-info {
    justify-content: center;
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
