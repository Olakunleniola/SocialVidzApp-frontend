<template>
  <div v-if="display" class="flex flex-col font-montserrat items-center justify-center fixed inset-0 bg-black bg-opacity-90 z-50">
    <div class="text-center text-white">
      <div class="relative grid place-items-center">
        <svg viewBox="0 0 100 100" class="circle-svg -rotate-90 overflow-hidden">
          <circle class="stroke-light" cx="50" cy="50" r="45" fill="none" />
          <circle 
            class="progress-circle stroke-tomato-500" 
            cx="50" 
            cy="50" 
            r="45" 
            :stroke-dasharray="283" 
            :stroke-dashoffset="offset" 
            stroke-width="6"
            fill="#0f0e0f80"
          />
        </svg>
        <div 
          class="absolute text-4xl" 
          :aria-valuenow="progress" 
          id="percentage">
          <span v-if="progress < 100">{{ progress }}%</span>
          <span v-else class="success-icon">✔</span>
        </div>
      </div>
      <p class="mt-3"> {{ progress === 100 ?  "Download Successful!" : "Downloading........" }}</p>
    </div>
    <!-- Cancel Button -->
    <button
        v-if="progress < 100"
        @click="cancelDownload"
        class="mt-4 flex items-center justify-center text-center relative overflow-hidden border-4 border-tomato-500 hover:border-light text-tomato-500 hover:text-light active:border-tomato-700 active:text-tomato-700 px-4 py-2 rounded-lg shadow transition duration-400 ease"
      >
      <svg class="mr-2 w-8 h-auto drop-shadow-lg" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="cancelIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="none">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path> <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path> </g>
        </svg>
        Cancel Download
      </button>
  </div>
</template>

  
<script>
  export default {
    name: "DownloadAnimation",
    props: {
      progress: {
        type: Number,
        required: true,
      },
    },

    data() {
      return {
        display: true,
      };
    },

    computed: {
      offset() {
        return 283 - (283 * this.progress) / 100; // Smooth progress
      },
    },

    watch: {
      progress(newVal) {
        if (newVal === 100) {
          this.handleCompletion()
        }
      },
    },

    mounted() {
      if (this.progress === 100){
        this.handleCompletion()
      }
    },

    methods: {
      handleCompletion() {
        setTimeout(() => {
          this.display = false; // Hide modal after success
          }, 3000);
      },

      cancelDownload() {
        this.$emit("cancel")
      }
    },
  };
</script>

  
<style scoped>

  button {
    z-index: 1;
  }

  button::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 300%;
    top: 100%;
    left: 100%;
    border-radius: 50%;
    background: linear-gradient(to left, #290601, #d82c11 );
    transition: all .4s ease;
    z-index: -1;
  }

  button:hover::before {
    top: -100%;
    left: -100%;
  }

  button:active::before {
    background: none;
    transition: background 0s;
  }

  .circle-svg {
    width: 150px;
    height: 150px;
  }

  .stroke-light {
    stroke: #e5e7eb;
    stroke-width: 6;
  }

  .progress-circle {
    stroke-linecap: round;
    transition: stroke-dashoffset 0.1s ease-in-out;
  }

  .success-icon {
    color: #27d335;
    font-size: 2rem;
    font-weight: bold;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>

  