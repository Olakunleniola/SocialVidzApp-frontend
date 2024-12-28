<template>
    <div v-if="show" class="fixed top-0  w-full text-center px-4 py-6 bg-tomato-800 text-white shadow-lg">
      {{ message }}
      <span @click="clearMessage" class="float-right hover:shadow-lg cursor-pointer grid place-items-center h-full ">
        <span>X</span>
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