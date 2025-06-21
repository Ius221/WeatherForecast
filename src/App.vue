<template>
  <div>
    <the-header />
    <div class="container">
      <main-location
        @location-info="takeLocation"
        :isLoading="isLoading"
        :apiResponse="fetchedRes"
      />
      <hour-forecast :isLoading="isLoading" :apiResponse="fetchedRes" />
      <days-forecast :isLoading="isLoading" />
      <neighbour-location :isLoading="isLoading" />
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/Section/TheHeader.vue";
import TheFooter from "./components/Section/TheFooter.vue";
import MainLocation from "./components/Location/MainLocation.vue";
import NeighbourLocation from "./components/Location/NeighbourLocation.vue";
import DaysForecast from "./components/forecast/DaysForecast.vue";
import HourForecast from "./components/forecast/HourForecast.vue";

export default {
  components: {
    TheHeader,
    HourForecast,
    NeighbourLocation,
    TheFooter,
    DaysForecast,
    MainLocation,
  },

  data() {
    return {
      location: "Kolkata",
      isLoading: false,
      apiResponse: [],
      fetchedRes: {},
    };
  },

  methods: {
    takeLocation(getLocation) {
      this.location = getLocation;
      this.apiCall();
    },

    async apiCall() {
      this.isLoading = true;
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=58eea9fae1ea43b4b0b125004251606&q=${this.location}&days=5&aqi=no&alerts=no`
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        this.fetchedRes = await response.json();
      } catch (err) {
        console.error("Error fetching weather data : " + err);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.apiCall();
  },
};
</script>

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
