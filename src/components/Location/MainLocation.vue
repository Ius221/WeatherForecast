<template>
  <div class="location-info">
    <h1 class="location-name">New York City</h1>
    <p class="location-country">New York, United States</p>
  </div>

  <div class="weather-main">
    <div class="weather-icon">🌤️</div>
    <div class="temperature">
      <div class="temp-value">24°</div>
      <div class="weather-description">Partly Cloudy</div>
    </div>
    <div class="additional-info">
      <small-container>
        <template #label>Feels like </template>
        <template #value>27° </template>
      </small-container>
    </div>
  </div>

  <div>
    <div class="weather-details">
      <small-container v-for="(details, ind) in otherDetails" :key="ind">
        <template #label>{{ details.label }} </template>
        <template #value>{{ details.value }} </template>
      </small-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherDetails: [
        {
          label: "Wind Speed",
          value: "12 km/h",
        },
        {
          label: "Pressure",
          value: "1013 hPa",
        },
        {
          label: "UV Index",
          value: "6",
        },
        {
          label: "Visibility",
          value: "10 km",
        },
        {
          label: "Sunrise",
          value: "6:42 AM",
        },
        {
          label: "Humidity",
          value: "68%",
        },
      ],
    };
  },
};
</script>

<style>
.location-info {
  text-align: center;
  margin-bottom: 2rem;
}

.location-name {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
}

.location-country {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

.weather-main {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

.weather-icon {
  font-size: 5rem;
  text-align: center;
  animation: bounce 2s infinite;
}

.temperature {
  text-align: center;
}

.temp-value {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.weather-description {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: capitalize;
  margin-top: 0.5rem;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  text-align: center;
}
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .weather-main {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .location-name {
    font-size: 2rem;
  }

  .temp-value {
    font-size: 3rem;
  }

  .weather-details {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
