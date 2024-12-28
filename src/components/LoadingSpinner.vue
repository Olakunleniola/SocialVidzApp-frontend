<template>
    <div class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div class="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
  };
  </script>
  
  <style scoped>
  .loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-left-color: tomato;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  