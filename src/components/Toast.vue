<template>
    <div v-if="show" class="fixed top-0 w-full font-poppins font-bold text-center px-4 py-6 bg-tomato-800 dark:bg-light text-light dark:text-tomato-800 shadow-lg">
      {{ message }}
      <span @click="clearMessage" class="float-right hover:shadow-lg cursor-pointer grid place-items-center h-full hover:text-slate-400 active:text-light ">
        <svg class=" w-8 h-auto drop-shadow-lg" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="cancelIconTitle" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="none">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path> <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path> </g>
        </svg>
      </span>
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    duration: {
      type: Number,
      default: 8000, // Default duration in ms
    },
  },
  data() {
    return {
      show: true,
    };
  },

  methods: {
    clearMessage() {
      this.$emit('update:message', '');
    },
  },

  mounted() {
    setTimeout(() => {
      this.clearMessage();
      this.show = false;
    }, this.duration);
  },
};
</script>

<style scoped>

</style>