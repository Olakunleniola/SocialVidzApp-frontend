<template>
  <div class="min-h-screen flex flex-col bg-gray-200 dark:bg-dark text-light ">
    <!-- Header -->
    <header class=" bg-gradient-to-b dark:from-[#C62828] from-gray-600 dark:text-white py-4 px-6 shadow-md ">
      <div class="flex justify-between items-center max-w-[960px] mx-auto">
        <div class="flex items-center">
          <img src="/Social_Vidz_logo.png" alt="Social Vidz Logo" class="w-16 h-auto mr-4">
          <h2 class="text-2xl font-bold drop-shadow-xl text-dark dark:text-white">Social Vidz</h2>
        </div>
       
        <button @click="toggleDarkMode" id="themeToggle" class=" flex w-20 px-6 py-1 rounded-md">
          <img v-show="!darkMode" src="/night-dark-late-moon-svgrepo-com (2).png" alt="night" class="w-full h-full">
          <img v-show="darkMode" src="/day-forecast-hot-svgrepo-com.png" alt="day">
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-6 text-gray-900 dark:text-gray-200">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold">Download Videos Seamlessly</h2>
        <p class="text-2xl">Download videos from your favorite platforms (except TikTok).</p>
      </div>

     <!-- Download Form -->
      <form class="p-6 max-w-xl mx-auto">
        <div class="mb-4 lg:text-lg text-md text-dark dark:text-white">
          <label for="videoURL" class="block font-medium">Video URL :</label>
          <div class="relative">
            <input v-model="videoUrl" type="url" id="videoURL" placeholder="Paste video URL" class="placeholder:italic placeholder:text-slate-400 mt-1 block w-full p-5 rounded-md border border-4 border-gray-400 shadow-xl focus:outline-none focus:ring-rose-400 focus:ring-5 focus:border-rose-400 dark:focus:border-rose-500 dark:border-gray-700 dark:bg-gray-900 bg-gray-100 border broder-rose-400" >
            <span class="absolute inset-y-0 right-0 grid place-items-center w-[50px] cursor-pointer  my-1 mx-1 dark:bg-gray-900 bg-gray-100 shadow-2xl shadow-inner border-l-2">
              <svg @click="handlePaste" v-if="!videoUrl" class=" w-8 h-auto fill-slate-500 hover:fill-rose-500 dark:hover:fill-rose-500 dark:fill-rose-100 drop-shadow-lg"   fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>paste</title>
                <path d="M10,1c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536c0,5.322 -0,14.678 0,20c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c3.486,0 8.514,0 12,0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536l-0,-20c0,-1.326 -0.527,-2.598 -1.464,-3.536c-0.938,-0.937 -2.21,-1.464 -3.536,-1.464l-0,3c0,1.326 -0.527,2.598 -1.464,3.536c-0.938,0.937 -2.21,1.464 -3.536,1.464l-2,-0c-1.326,0 -2.598,-0.527 -3.536,-1.464c-0.937,-0.938 -1.464,-2.21 -1.464,-3.536l0,-3Zm1,25l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,-6l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,-6l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm9,-13l-0,3c0,0.796 -0.316,1.559 -0.879,2.121c-0.562,0.563 -1.325,0.879 -2.121,0.879l-2,0c-0.796,0 -1.559,-0.316 -2.121,-0.879c-0.563,-0.562 -0.879,-1.325 -0.879,-2.121l-0,-3l8,-0Z"/><g id="Icon"/>
              </svg>
              <span v-else @click="videoUrl=''" class="block hover:text-rose-500 drop-shadow-xl font-bold text-lg text-slate-500" title="clear">
                <svg class=" w-8 h-auto drop-shadow-lg" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="cancelIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="none">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path> <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path> </g>
                </svg>
              </span>
            </span>
          </div>
        </div>  

        <button @click="handleDownload" :disabled="isLoading" type="submit" class="w-full bg-tomato-500 text-white py-2 rounded-md hover:bg-tomato-600 dark:hover:bg-tomato-800">Download</button>
      </form>

      <!-- Video Previews -->
      <!-- Example Video Cards -->
      <div v-show="videoUrl" class="mt-8 flex flex-col max-w-lg mx-auto h-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <iframe v-if="platform === 'youtube'" :src="embedUrl" frameborder="0" allowfullscreen class="w-full h-[250px]" ></iframe>
        <video v-else :src="videoUrl" controls class="w-full">
        </video>
        <div class="p-4">
          <h3 class="text-lg font-bold">Video Title</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ platform }}</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-t from-gray-600 dark:bg-dark shadow-lg py-4 text-center text-gray-900 dark:text-gray-400">
      <p >&copy; 2024 Social Vidz. All rights reserved.</p>
      <a href="" class="underline text-blue-800 dark:text-blue-300">Terms of Use</a>
    </footer>

    <Transition name="slide">
      <Toast v-if="errorMessage" v-model:message="errorMessage" />
    </Transition>
    <LoadingSpinner v-if="isLoading" />
    <SuccessAnimation v-if="isSuccess" />
  
  </div>
</template>


<script>
  
  import Toast from "./components/Toast.vue";
  import LoadingSpinner from "./components/LadingSpinner.vue";
  import SuccessAnimation from "./components/SuccessAnimation.vue";
  import { ref } from 'vue';
  
  export default {
    components: {
      Toast,
      LoadingSpinner,
      SuccessAnimation,
    },

    setup(){
      const errorMessage = ref("")
      return {errorMessage}
    },

    data() {

      return {
        videoUrl: "",
        isLoading: false,
        isSuccess: false,
        darkMode: false,
        platform: "",
      };
    },

    methods: {
      handleInput() {
        if (this.isLoading) return;
        this.isSuccess = false;
        this.errorMessage = "";
      },

      handleDownload(e) {
        e.preventDefault()
        if (!this.videoUrl.trim()) {
          this.errorMessage = "Please enter a valid URL!";
          return;
        }
        this.isLoading = true;

        // Simulate API call
        setTimeout(() => {
          this.isLoading = false;
          if (Math.random() > 0.5) {
            this.isSuccess = true;
            this.videoUrl = "";
          } else {
            this.errorMessage = "Download failed. Please try again.";
          }
        }, 3000);
      },

      toggleDarkMode() {
        this.darkMode = !this.darkMode
        document.documentElement.classList.toggle("dark", this.darkMode)
      },

      async handlePaste(e) {
        e.preventDefault()
        try{
          if (navigator.clipboard && navigator.clipboard.readText){
            const text = await navigator.clipboard.readText()
            this.videoUrl = text; 
          }else {
            alert("Pasting not supported in Browser")
          }
        } catch(err) {
          console.error("Falied to read the text", err)
          this.errorMessage = "Invalid Video Url"
        }
      },

      extractVideoId() {
        const videoIdMatch = this.videoUrl.match(/(?:v=|\/shorts\/|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
        return videoIdMatch ? videoIdMatch[1] : ""
      }
      
    },

    watch: {
      videoUrl(newVal) {
        if (newVal) {
          const pattern1 = /^http:\/\/www\.|https:\/\/[a-zA-z0-9-_.]+/
          const match = newVal.match(pattern1)
          if(!match || newVal.length > 200){
            this.errorMessage = "Invalid Url"
            this.videoUrl = ""
            return
          }          
          
          if (newVal.includes("youtube")){
            this.platform = 'youtube'
          }
          
        }
      },

    },

    computed: {
      embedUrl() {
        if(this.platform === 'youtube'){}
        const videoId = this.extractVideoId()
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
      }
    }

  };

</script>

<style>
  .slide-enter-active, .slide-leave-active {
    transition: transform 1s ease-in-out, opacity 0.3s ease-in-out;
  }
  .slide-enter-from {
      transform: translateX(100%);
      opacity: 0;
  }
  .slide-enter-to {
      transform: translateX(0);
      opacity: 1;
  }
  .slide-leave-from {
      transform: translateX(0);
      opacity: 1;
  }
  .slide-leave-to {
      transform: translateX(100%);
      opacity: 0;
  }

</style>
