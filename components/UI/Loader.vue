<template>
  <div class="showbox" :class="classes" :style="styleVals">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="5"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  classes: {
    type: String,
    default: "w-10",
  },
  color: {
    type: String,
    default: "#3563e9",
  },
});

const styleVals = computed(() => {
  return {
    "--loader-color": props.color,
  };
});
</script>

<style lang="scss" scope>
.loader {
  position: relative;
  margin: 0 auto;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: var(--loader-color);
  }
  40% {
    stroke: var(--loader-color);
  }
  66% {
    stroke: var(--loader-color);
  }
  80%,
  90% {
    stroke: var(--loader-color);
  }
}
</style>
