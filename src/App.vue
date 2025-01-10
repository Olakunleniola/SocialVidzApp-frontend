<template>
  <div id="content" class='bg-bgLight dark:bg-dark-bg min-h-screen flex flex-col font-poppins transition ease-in-out delay-150' :aria-mode="darkMode">
    
    <!-- Header -->
    <header class="px-6 py-4 shadow-lg dark:bg-gradient-to-b dark:from-tomato-800 ">
      <div class="flex justify-between items-center max-w-[960px] mx-auto">

        <div class="flex items-center">
          <img src="/img/Socialvidz_logo_alt.png" alt="Social Vidz Logo" class="md:w-10 w-8 h-auto mr-1">
          <h1 id="logo-text" 
            class="md:text-xl lg:text-2xl text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-tomato-500 via-blue-500 to-green-500 drop-shadow-lg tracking-widest  font-ethnocentric">
            SocialVidz
          </h1>
        </div>

        <button 
          @click="toggleDarkMode" 
          id="themeToggle" 
          class="flex justify-center items-center w-12 h-12 bg-dark text-light dark:text-dark dark:bg-light drop-shadow-lg rounded-full hover:border-2 hover:border-tomato-500"
          aria-label="Toggle dark mode"
        >
          <svg 
            v-show="!darkMode" 
            class="w-8 h-8 "
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>toogle dark mode</title>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.9931 13.3127C20.5158 13.435 20.0155 13.5 19.5 13.5C16.1863 13.5 13.5 10.8137 13.5 7.5C13.5 6.98452 13.565 6.48422 13.6873 6.00686C9.9664 6.17045 7 9.2388 7 13C7 16.866 10.134 20 14 20C17.7612 20 20.8295 17.0336 20.9931 13.3127Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 8.25C4.77614 8.25 5 8.47386 5 8.75V10.25C5 10.5261 4.77614 10.75 4.5 10.75C4.22386 10.75 4 10.5261 4 10.25V8.75C4 8.47386 4.22386 8.25 4.5 8.25Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 9.5C3.25 9.22386 3.47386 9 3.75 9H5.25C5.52614 9 5.75 9.22386 5.75 9.5C5.75 9.77614 5.52614 10 5.25 10H3.75C3.47386 10 3.25 9.77614 3.25 9.5Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3C7.77614 3 8 3.22386 8 3.5V5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5V3.5C7 3.22386 7.22386 3 7.5 3Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5C6 4.22386 6.22386 4 6.5 4H8.5C8.77614 4 9 4.22386 9 4.5C9 4.77614 8.77614 5 8.5 5H6.5C6.22386 5 6 4.77614 6 4.5Z"></path>
            </g>
          </svg>

          <svg
            v-show="darkMode"
            class="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <title>toogle light mode</title>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <g clip-path="url(#a)" fill="currentColor"> 
                <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path>
              </g>
              <defs> 
                <clipPath id="a">
                  <path fill="currentColor" d="M0 0h24v24H0z"></path> 
                </clipPath> 
              </defs> 
            </g>
          </svg>

        </button>

      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mt-3 mx-auto p-6 text-gray-700 dark:text-gray-400">
      
      <!-- Headers and Text Description -->
      <div class="text-center mb-8">
        <h2 class="text-tomato-700 dark:rainbow text-4xl font-bold font-montserrat">Download Videos Seamlessly</h2>
        <p class="md:text-xl font-extrabold mt-6 ">Download videos from your favorite platforms ✨</p>
      </div>

     <!-- Download Form -->
      <form v-on:submit.prevent class="p-6 max-w-xl mx-auto">
        <div class="mb-4 lg:text-lg text-md text-dark dark:text-gray-400">
          <label for="videoURL" class="block font-lg font-bold font-montserrat">Video URL :</label>
          <div class="relative">
            <!-- Input Field -->
            <input v-model="videoUrl" type="url" id="videoURL" placeholder="Paste video URL" class="placeholder:italic placeholder:text-slate-400 mt-1 block w-full p-5 rounded-lg border-4 border-tomato-700 shadow-xl focus:outline-none focus:ring-tomato-500 focus:ring-5 focus:border-tomato-500 dark:focus:border-tomato-500 dark:bg-light bg-gray-100 broder-tomato-500" >
            <!-- Paste and Clear Icon -->
            <span class="absolute inset-y-0 right-0 grid place-items-center w-[50px] cursor-pointer my-1 mx-1 dark:bg-dark bg-light shadow-2xl shadow-inner border-l-1">
              <svg @click="handlePaste" v-if="!videoUrl" class="w-8 h-auto fill-dark dark:fill-light hover:fill-tomato-500 dark:hover:fill-tomato-500 active:fill-dark dark:active:fill-light transition-colors duration-300 ease-in-out"   fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>paste</title>
                <path d="M10,1c-1.326,-0 -2.598,0.527 -3.536,1.464c-0.937,0.938 -1.464,2.21 -1.464,3.536c0,5.322 -0,14.678 0,20c-0,1.326 0.527,2.598 1.464,3.536c0.938,0.937 2.21,1.464 3.536,1.464c3.486,0 8.514,0 12,0c1.326,0 2.598,-0.527 3.536,-1.464c0.937,-0.938 1.464,-2.21 1.464,-3.536l-0,-20c0,-1.326 -0.527,-2.598 -1.464,-3.536c-0.938,-0.937 -2.21,-1.464 -3.536,-1.464l-0,3c0,1.326 -0.527,2.598 -1.464,3.536c-0.938,0.937 -2.21,1.464 -3.536,1.464l-2,-0c-1.326,0 -2.598,-0.527 -3.536,-1.464c-0.937,-0.938 -1.464,-2.21 -1.464,-3.536l0,-3Zm1,25l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,-6l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm0,-6l10,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-10,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm9,-13l-0,3c0,0.796 -0.316,1.559 -0.879,2.121c-0.562,0.563 -1.325,0.879 -2.121,0.879l-2,0c-0.796,0 -1.559,-0.316 -2.121,-0.879c-0.563,-0.562 -0.879,-1.325 -0.879,-2.121l-0,-3l8,-0Z"/><g id="Icon"/>
              </svg>
              <span v-else @click="handleClear" class="blocktext-dark dark:text-light  hover:text-rose-500 drop-shadow-xl font-bold text-lg" title="clear">
                <svg class=" w-8 h-auto drop-shadow-lg" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="cancelIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="none">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path> <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path> </g>
                </svg>
              </span>
            </span>
          </div>
        </div>  

        <!-- Video Previews -->
        <div v-show="videoInfo.title" class="font-montserrat mt-8 flex flex-col max-w-lg mx-auto h-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <iframe v-if="videoInfo.platform === 'youtube'" :src="embedUrl" frameborder="0" allowfullscreen class="w-full h-[250px] rounded-t-lg"></iframe>
          <video v-else :src="videoInfo.url" autoplay class="w-full h-[250px] rounded-t-lg"></video>
          <div class="p-4 bg-gradient-to-l from-tomato-500 via-tomato-800 to-red-900 ">
            <h3 class="text-sm text-light font-bold">Video Title: <span class="font-poppins font-aleo text-gray-200 italics">{{ videoInfo.title }}</span></h3>
            <p class="text-sm text-light mt-3 font-bold">Platform: <span class="font-poppins text-gray-200 capitalize"> {{ videoInfo.platform }} </span></p>
            <p class="text-sm text-light mt-3 font-bold">Video Size: <span class="font-poppins text-gray-200 capitalize"> {{ (videoInfo.size/1000000).toFixed("2") }} MB </span></p>
          </div>
        </div>

        <!-- Download Button -->
        <button
          v-show="videoInfo.title"
          @click="handleDownload"
          :disabled="isDownloading"
          id="download"
          type="button"
          class="mt-8 w-full md:block md:mx-auto md:max-w-[50%] p-4 text-tomato-700 dark:text-light bg-light dark:bg-transparent font-bold font-ethnocentric rounded-md overflow-hidden hover:bg-transparent hover:text-light border-4 border-tomato-700  hover:border-tomato-500 dark:border-light dark:hover:border-tomato-500 active:bg-gradient-to-r active:from-tomato-800 active:to-dark active:border-tomato-700 dark:active:border-tomato-700 transition duration-100 ease-in-out shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative"
        >
          Download
        </button>
      </form>

    </main>

    <!-- Footer -->
    <footer class="shadow-lg py-4 text-center text-gray-700 dark:text-gray-400 dark:bg-gradient-to-t dark:from-tomato-800">
      <p>&copy; 2024 Social Vidz. All rights reserved.</p>
      <a href="" class="relative text-blue-500 dark:text-blue-400 dark:hover:text-light hover:text-tomato-600">Terms of Use</a>
    </footer>

    <!-- Components -->
    <Transition name="slide">
      <Toast v-if="errorMessage" v-model:message="errorMessage" />
    </Transition>
    <LoadingSpinner v-if="isLoading"/>
    <DownloadAnimation 
      v-if="isDownloading" 
      :progress="downloadProgress"
      @cancel="handleCancelDownload"  
    />
    <PreloadAnimation v-if="preloading" />
  
  </div>
</template>

<script>

  import Toast from "./components/Toast.vue";
  import LoadingSpinner from "./components/LoadingSpinner.vue";
  import DownloadAnimation from "./components/DownloadAnimation.vue";
  import PreloadAnimation from "./components/PreloadAnimation.vue";
  import { ref } from 'vue';
 
  
  export default {

    components: {
      Toast,
      LoadingSpinner,
      DownloadAnimation,
      PreloadAnimation,
    },

    setup(){
      const errorMessage = ref("")
      return {errorMessage}
    },

    data() {

      return {
        preloading: true,
        videoUrl: "",
        isLoading: false,
        isDownloading: false,
        darkMode: false,
        platform: "",
        videoInfo: {},
        downloadProgress: 0,
        apiUrl: import.meta.env.VITE_API_URL,
      };
    },

    methods: {

      async handleDownload(e) {
        e.preventDefault();

        if (!this.videoUrl.trim()) {
          this.errorMessage = "Please enter a valid URL!";
          return;
        }

        this.isDownloading = true;
        this.downloadProgress = 0;
        this.abortController = new AbortController();
        const signal = this.abortController.signal;

        try {
          // Start the fetch request for downloading the video
          const response = await fetch(`${this.apiUrl}/social_vidz/api/download`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              url: this.videoInfo.url.trim(),
              platform: this.videoInfo.platform,
              size: this.videoInfo.size, // Send the size if you know it, otherwise you can handle this in the server
            }),
            signal
          });

          if (!response.ok) {
            const error = await response.json() 
            throw new Error(`Failed to download: ${error.detail}`);
          }

          // Get the Content-Length header if available for progress tracking
          const contentLength = response.headers.get('Content-Length');
          const reader = response.body.getReader(); // Read the response as a stream
          const totalSize = contentLength ? parseInt(contentLength, 10) : 0; // Total file size i
          let recievedLength = 0; // Tracks the loaded bytes
          const chunks = []; // To store the chunks of data

          const processChunk = ({done, value}) => {
            if(done){
              this.downloadProgress = 100;
              const blob = new Blob(chunks);
              const downloadLink = document.createElement('a');
              const sanitizedTitle = this.videoInfo.title.trim().replace(/\s+/g, "_").substr(0, 15);
              downloadLink.download = `${sanitizedTitle || "video"}.mp4`;
              downloadLink.href = URL.createObjectURL(blob);
              document.body.appendChild(downloadLink);
              downloadLink.click(); // Trigger the download
              URL.revokeObjectURL(downloadLink);
              document.body.removeChild(downloadLink);
              this.handleClear(); // Reset or clean up any state
              this.isLoading = false
              this.isSuccess = true;
              return;
            }
    
            chunks.push(value);
            recievedLength +=value.length;
            const progress = (recievedLength/ totalSize) * 100;
            this.downloadProgress = Math.floor(progress)
            console.log(this.downloadProgress)
            reader.read().then(processChunk)
          }

          reader.read().then(processChunk)
         
        } catch (err) {
          console.error("Download error:", err);
          this.errorMessage = "Failed to download video.";
          this.isLoading = false
        }
      },

      toggleDarkMode() {
        this.darkMode = !this.darkMode
        localStorage.setItem('darkmode', this.darkMode)
        document.documentElement.classList.toggle("dark", this.darkMode)
      },

      async getVideoInfo(url) {
        this.isLoading = true;
        try {
          const response = await fetch(`${this.apiUrl}/social_vidz/api/get_info?url=${url}`);  
          if (!response.ok){
            const errorText = await response.json();
            throw new Error(errorText.detail);
          }
          const data = await response.json();
          this.videoInfo = data.data;
          this.platform = this.videoInfo.platform;
        }catch(err) {
         // Handle network errors
          if (err.message.toLowerCase().includes('failed')) {
            this.errorMessage = 'Network error. Please check your internet connection.';
          } else {
            this.errorMessage = err.message;
          }
          this.handleClear();
        }finally {
          this.isLoading = false;
        }
      },

      async handlePaste(e) {
        e.preventDefault()
        try{
          if (navigator.clipboard && navigator.clipboard.readText){
            const text = await navigator.clipboard.readText()
            this.videoUrl = text; 
          }
          else {
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
      },

      handleClear() {
        this.videoInfo = {};
        this.videoUrl = "";
        setTimeout(() => {
          this.downloadProgress = 0;
          this.isDownloading = false
        }, 5000);
      },

      handleCancelDownload() {
        if(this.abortController){
          this.isDownloading = false
          this.abortController.abort()
          this.handleClear()
          this.errorMessage = "Download canceled by User"
        }
      },

      preloadAssets() {
        const font = new FontFace("Ethnocentric", "url(/fonts/ethnocentric-rg.ttf)");
        document.fonts.add(font);

        const imageUrls = ["/img/background.png", "/img/Socialvidz_logo_alt.png"];
        const promises = imageUrls.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        return Promise.all([font.load(), ...promises]);
      },
    },

    watch: {
      videoUrl(newVal) {
        if (newVal) {
          const pattern1 = /^https?:\/\/www\.|https:\/\/[a-zA-z0-9-_.]+/
          const match = newVal.match(pattern1)
          if(!match || newVal.length > 100){
            this.errorMessage = "Invalid Url"
            this.videoUrl = ""
            return
          } 
          this.getVideoInfo(newVal)
        }
      },

    },

    computed: {
      embedUrl() {
        if(this.platform === 'youtube'){}
        const videoId = this.extractVideoId()
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
      }
    },

    async mounted(){
      const isDark = localStorage.getItem('darkmode');
      console.log(isDark)
      if(isDark === 'true' ){
        this.darkMode = true;
        document.documentElement.classList.toggle("dark", this.darkMode);
      };
      try{
        // Max 10 seconds
        const timeout = new Promise((resolve) => setTimeout(resolve, 10000)); 
        // Preload logic from the earlier example
        const preload = this.preloadAssets();
        // Whichever completes first
        await Promise.race([timeout, preload]); 
        this.preloading = false;
      }catch(error){
        console.log(error)
      }
    },

  };

</script>

<style>

  .slide-enter-active, .slide-leave-active {
    transition: transform .3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .slide-enter-from {
      transform: translateY(-100%);
      opacity: 0;
  }
  .slide-enter-to {
      transform: translateY(0);
      opacity: 1;
  }
  .slide-leave-from {
      transform: translateY(0);
      opacity: 1;
  }
  .slide-leave-to {
      transform: translateY(-100%);
      opacity: 0;
  }

</style>
