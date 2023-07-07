<template>
    <div class="weather-widget">
      <h2>{{ location }}</h2>
      <p>{{ temperature }}°C</p>
      <p>{{ weatherDescription }}</p>
      <button @click="getWeather">Refresh</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        temperature: null,
        weatherDescription: '',
      };
    },
    mounted() {
      this.getWeather();
    },
    methods: {
      async getWeather() {
        try {
          const apiKey = 'YOUR_API_KEY';
          const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          this.location = data.location.name;
          this.temperature = data.current.temp_c;
          this.weatherDescription = data.current.condition.text;
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .weather-widget button {
    margin-top: 10px;
  }
  </style>
  