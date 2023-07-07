<template>
    <div class="stopwatch-widget">
      <h2>Stopwatch</h2>
      <p>{{ formatTime }}</p>
      <div>
        <button @click="startStopwatch" :disabled="isRunning">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
        <button @click="resetStopwatch">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        currentTime: null,
      };
    },
    computed: {
      elapsedTime() {
        if (this.startTime) {
          return this.isRunning ? Date.now() - this.startTime : this.currentTime - this.startTime;
        }
        return 0;
      },
      formatTime() {
        const milliseconds = this.elapsedTime;
        const minutes = Math.floor((milliseconds / 1000 / 60) % 60)
          .toString()
          .padStart(2, '0');
        const seconds = Math.floor((milliseconds / 1000) % 60)
          .toString()
          .padStart(2, '0');
        const centiseconds = Math.floor((milliseconds / 10) % 100)
          .toString()
          .padStart(2, '0');
        return `${minutes}:${seconds}.${centiseconds}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.startTime = Date.now() - this.elapsedTime;
          this.isRunning = true;
          this.updateTime();
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          this.currentTime = Date.now();
        }
      },
      resetStopwatch() {
        this.startTime = null;
        this.isRunning = false;
        this.currentTime = null;
      },
      updateTime() {
        if (this.isRunning) {
          requestAnimationFrame(this.updateTime);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stopwatch-widget button {
    margin-top: 10px;
  }
  </style>
  