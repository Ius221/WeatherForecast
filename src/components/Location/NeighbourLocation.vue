<template>
  <div class="nearby-section" v-if="!isLoading">
    <h2 class="section-title">🌍 Nearby Locations</h2>
    <div class="nearby-cards">
      <div v-for="(neighbour, ind) in neighbours" :key="ind">
        <big-container>
          <div class="nearby-location">{{ neighbour.name }}</div>
          <div class="weather-icon">{{ neighbour.icon }}</div>
          <div class="nearby-temp">{{ neighbour.temp }}°</div>
          <div class="nearby-condition">{{ neighbour.condition }}</div>
        </big-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],

  data() {
    return {
      neighbours: [
        {
          name: "Seattle",
          icon: "🌧️",
          temp: "18",
          condition: "Rainy",
        },
        {
          name: "Denver",
          icon: "🌤️",
          temp: "22",
          condition: "Partly Cloudy",
        },
        {
          name: "Miami",
          icon: "⛅",
          temp: "30",
          condition: "Humid",
        },
        {
          name: "Tokyo",
          icon: "🌪️",
          temp: "24",
          condition: "Windy",
        },
        {
          name: "Cairo",
          icon: "🔥",
          temp: "38",
          condition: "Hot",
        },
      ],
    };
  },
  computed() {
    // Add click animation to cards
    document.querySelectorAll(".neighbour-card").forEach((card) => {
      card.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
  },
};
</script>

<style>
.nearby-section {
  padding: 35px 0;
}
.section-title {
  font-size: 1.8rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  text-align: center;
}

.nearby-cards {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-behavior: smooth;
}
.nearby-cards::-webkit-scrollbar {
  height: 8px;
}

.nearby-cards::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.nearby-cards::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
.weather-icon {
  font-size: 5rem;
  text-align: center;
  animation: bounce 2s infinite;
}

.nearby-location {
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.nearby-temp {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin: 0.5rem 0;
}

.nearby-condition {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: capitalize;
}
</style>
