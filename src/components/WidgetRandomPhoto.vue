<template>
    <div class="random-photo-widget">
      <h2>{{ title }}</h2>
      <img :src="photoUrl" :alt="title" />
      <button @click="getRandomPhoto">Load New Photo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const response = await fetch('https://source.unsplash.com/random');
          this.photoUrl = response.url;
          this.title = '';
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .random-photo-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .random-photo-widget button {
    margin-top: 10px;
  }
  </style>
  