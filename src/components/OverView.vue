<template>
  <div class="w-full h- bg-[#252a41] rounded mb-4">
    <p
      class="pt-5 text-sm font-light font-Inter text-[#8b97c6] tracking-widest"
    >
      Followers
           </p>


      <p class="pt-2 text-2xl font-bold text-white">{{ title }}</p>
      <div>SVG</div>
      <div>up/down</div>
    
  </div>
</template>

<script>
export default {
  props: ["title"],
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
