<template>
    <div class="location-widget">
      <h2>Your Location</h2>
      <p>{{ latitude }}</p>
      <p>{{ longitude }}</p>
      <button @click="getLocation">Get Location</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
      };
    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .location-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .location-widget button {
    margin-top: 10px;
  }
  </style>
  