<template>
  <!-- Search Section -->
  <div class="search-container">
    <div class="search-input-wrapper">
      <div class="search-icon">🔍</div>
      <input
        type="text"
        class="search-bar"
        @keypress.enter="ResponseEdited"
        placeholder="Search for a city..."
        id="locationSearch"
        v-model="enteredLocation"
      />
    </div>
    <button @click="ResponseEdited" class="search-button" id="searchButton">
      🔍
    </button>
  </div>

  <h2 v-if="isLoading" style="color: white">
    <center>Fetching Data...</center>
  </h2>

  <big-container v-else>
    <div class="location-info">
      <h1 class="location-name">{{ apiResponses.city }}</h1>
      <p class="location-country">{{ apiResponses.fullLocation }}</p>
    </div>

    <div class="weather-main">
      <div class="weather-icon">
        <img :src="imgSrc" height="150px" />
      </div>
      <div class="temperature">
        <div class="temp-value">{{ apiResponses.currTemp }}°</div>
        <div class="weather-description">{{ apiResponses.currStatus }}</div>
      </div>
      <div class="additional-info">
        <small-container>
          <template #label>Feels like </template>
          <template #value>{{ apiResponses.feels }}° </template>
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
  </big-container>
</template>

<script>
export default {
  props: ["isLoading", "apiResponse"],
  data() {
    return {
      otherDetails: [],
      enteredLocation: "",
      apiResponses: {},
      imgSrc: "",
    };
  },

  watch: {
    apiResponse: {
      handler(newVal) {
        if (newVal && Object.keys(newVal).length > 0) {
          this.updateWeatherDetails(newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    async ResponseEdited() {
      this.$emit("location-info", this.enteredLocation);
      this.enteredLocation = "";
    },
    updateWeatherDetails(fetchedRes) {
      let tempObj = {
        city: fetchedRes.location.name,
        fullLocation:
          fetchedRes.location.region + ", " + fetchedRes.location.country,
        currTemp: fetchedRes.current.temp_c,
        currStatus: fetchedRes.current.condition.text,
        feels: fetchedRes.current.feelslike_c,
        imgcode: fetchedRes.current.condition.code,
        img: fetchedRes.current.condition.icon,
      };

      let tempArr = [
        {
          label: "Wind Speed",
          value: fetchedRes.current.wind_kph + " km/h",
        },
        {
          label: "Pressure",
          value: fetchedRes.current.pressure_mb + " mb",
        },
        {
          label: "Visibility",
          value: fetchedRes.current.vis_km + " km",
        },
        {
          label: "Cloud",
          value: fetchedRes.current.cloud + "%",
        },
        {
          label: "Heat Index",
          value: fetchedRes.current.heatindex_c + "°",
        },
        {
          label: "Humidity",
          value: fetchedRes.current.humidity + "%",
        },
      ];

      this.apiResponses = tempObj;
      this.otherDetails = tempArr;

      try {
        this.imgSrc = require(`@/assets/${tempObj.imgcode}.png`);
      } catch (e) {
        console.warn("Weather icon not found, using fallback:", e);
        this.imgSrc = this.apiResponses.img;
      }
    },
  },

};
</script>

<style scoped>
/* Search Bar */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  animation: slideInDown 1s ease-out;
}

.search-input-wrapper {
  position: relative;
}

.search-bar {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 1rem 1.5rem 1rem 3.5rem;
  width: 400px;
  color: white;
  font-size: 1.1rem;
  outline: none;
  transition: all 0.3s ease;
}

.search-bar::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-bar:focus {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.search-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.4rem;
}

.search-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.search-button:active {
  transform: translateY(0) scale(0.95);
}

.search-icon {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  pointer-events: none;
}
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
  .search-container {
    margin-left: 0;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .search-input-wrapper {
    width: 100%;
  }

  .search-bar {
    width: 100%;
    padding: 1rem 1.5rem 1rem 3rem;
  }

  .search-bar:focus {
    width: 100%;
  }

  .search-button {
    align-self: center;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
}
</style>
