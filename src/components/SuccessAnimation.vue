<template>
    <div v-if="display" class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div class="text-center text-white">
        <div class="checkmark">
          ✓
        </div>
        <p class="mt-3">Download Successful!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SuccessAnimation",
    data() {
      return {
        display: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.display = false
      }, 5000 )
    }
  };
  </script>
  
  <style scoped>
  .checkmark {
    font-size: 4rem;
    color: tomato;
    animation: bounce 1s ease-in-out;
  }
  @keyframes bounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  </style>
  