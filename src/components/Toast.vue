<template>
    <div v-if="show" class="w-1/2 fixed top-2 right-0 text-center p-4 rounded-lg bg-tomato text-white shadow-lg">
      {{ message }}
      <span @click="clearMessage" class="float-right hover:shadow-lg cursor-pointer p-1 px-2">X</span>
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