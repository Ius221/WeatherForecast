<template>
  <!-- Header -->
  <header>
    <div class="header-content">
      <div class="logo">⛅ WeatherScope</div>
      <nav>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#forecast">Forecast</a></li>
          <li><a href="#maps">Maps</a></li>
          <li><a href="#alerts">Alerts</a></li>
        </ul>
      </nav>
      <div class="search-container">
        <div class="search-icon">🔍</div>
        <input
          type="text"
          class="search-bar"
          placeholder="Search for a city..."
          id="locationSearch"
        />
        <div class="search-suggestions" id="searchSuggestions">
          <!-- Suggestions will be populated here -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Header */
header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 50px;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Search Bar */
.search-container {
  position: relative;
  margin-left: 2rem;
}

.search-bar {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 0.8rem 1.5rem 0.8rem 3rem;
  width: 300px;
  color: white;
  font-size: 1rem;
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
  width: 350px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  pointer-events: none;
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  margin-top: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.search-suggestions.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.suggestion-item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #000;
}

.suggestion-city {
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.suggestion-country {
  font-size: 0.9rem;
  color: #666;
}
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .search-container {
    margin-left: 0;
    width: 100%;
  }

  .search-bar {
    width: 100%;
  }

  .search-bar:focus {
    width: 100%;
  }
}
</style>
