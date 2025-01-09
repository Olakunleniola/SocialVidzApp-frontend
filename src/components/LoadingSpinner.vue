<template>
  <div class="flex flex-col items-center justify-center fixed inset-0 bg-black bg-opacity-75 z-50">
    <!-- Loader Animation -->
    <div class=" w-[150px] h-[150px]">
      <div class="loader w-full h-full border-[6px] border-[#ffffff4d] border-t-tomato-500 border-r-blue-500 border-l-green-500"></div>
    </div>

    <!-- Logo and Text -->
    

    <!-- Loading Text -->
    <p 
      class="mt-5 text-white text-opacity-75 text-sm md:text-base animate-blink">
      Loading, please wait...
    </p>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>

/* Dual-ring loader animations */
.loader {
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: spin .6s linear infinite;
}

.loader:hover {
  animation: spin .2s alternate infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    animation-timing-function: ease-in-out;
  }
}

@keyframes spin-reverse {
  to {
    transform: rotate(-360deg);
  }
}

/* Blink animation for the loading text */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-blink {
  animation: blink 1.5s infinite;
}

</style>
