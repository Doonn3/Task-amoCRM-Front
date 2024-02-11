<template>
  <svg
    class="anim-spin"
    viewBox="-2.5 -2.5 30.00 30.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0)"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke=""
      stroke-width="0.1"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"
        stroke=""
        stroke-width="1.25"
      ></path>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.anim-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
