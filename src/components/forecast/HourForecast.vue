<template>
  <div class="forecast-container" v-if="!isLoading">
    <h1 class="section-title">📅 Forecast timeline</h1>

    <ul class="forecast-grid">
      <li
        class="time-forecast"
        v-for="(hour, ind) in inHours"
        :class="nightClass(hour.time)"
        :key="ind"
      >
        <div class="time-label">{{ greet(hour.time) }}</div>
        <div class="time-value">{{ hour.time }}</div>
        <div class="weather-icon">
          <img :src="imgSrcMet(ind)" height="100px" />
        </div>
        <div class="temperature">{{ hour.temp }}°C</div>
        <div class="feels-like">Feels like {{ hour.feelLike }}°C</div>
        <div class="weather-desc">{{ hour.desc }}</div>
        <div class="weather-details">
          <div class="detail-row">
            <span>💧 Humidity</span>
            <span>{{ hour.humidity }}%</span>
          </div>
          <div class="detail-row">
            <span>💨 Wind</span>
            <span>{{ hour.wind }} km/h</span>
          </div>
          <div class="detail-row">
            <span>🔥 Heat</span>
            <span>{{ hour.heatInd }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["isLoading", "apiResponse"],
  data() {
    return {
      inHours: [],
      // imgSrc: "",
    };
  },
  watch: {
    apiResponse: {
      handler(newVal) {
        if (newVal && Object.keys(newVal).length > 0) {
          this.getHour(newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getHour(fetchedRes) {
      let i = +fetchedRes.current.last_updated.slice(-5).slice(0, -3);
      let k = 0;

      let tempArr = [];

      for (i++; tempArr.length < 5; i += 3) {
        if (i >= 24) {
          i = 0;
          k = 1;
        }
        const common = fetchedRes.forecast.forecastday[k];
        let tempObj = {
          time: common.hour[i].time.slice(-5),
          temp: common.hour[i].temp_c,
          feelLike: common.hour[i].feelslike_c,
          imgCode: common.hour[i].condition.code,
          icon: common.hour[i].condition.icon,
          desc: common.hour[i].condition.text,
          humidity: common.hour[i].humidity,
          wind: common.hour[i].wind_kph,
          heatInd: common.hour[i].heatindex_c,
        };
        tempArr.push(tempObj);
      }
      this.inHours = tempArr;
    },
    greet(abc) {
      if (abc >= "04:00" && abc <= "06:00") return "Dawn";
      if (abc >= "07:00" && abc <= "11:00") return "Morning";
      if (abc >= "12:00" && abc <= "16:00") return "Afternoon";
      if (abc >= "17:00" && abc <= "20:00") return "Evening";
      if (abc >= "21:00" && abc <= "23:00") return "Night";
      if (abc >= "00:00" && abc <= "03:00") return "Late Night";
      else return "Failed";
    },
    nightClass(abc) {
      if (abc >= "21:00" && abc <= "23:00") return "night-time";
      if (abc >= "00:00" && abc <= "06:00") return "night-time";
      else return "";
    },
    imgSrcMet(abc) {
      return this.inHours[abc].icon;
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
