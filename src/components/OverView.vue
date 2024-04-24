<template>
  <div class="w-full bg-[#252a41] rounded mb-4 p-4">
    <div class="flex flex-row">
      <p
        class="text-xs font-bold font-Inter text-[#8b97c6] "
      >
        Page Views
      </p>
      <img class="w-3 h-3 ml-auto" src="../images/icon-instagram.svg" alt="FB">
    </div>
    <div class="flex flex-row">
      <p class="text-2xl font-bold text-white">{{ title }}</p>
      <img class="h-1 mt-3 ml-auto " src="../images/icon-up.svg" alt="FB">
    
      <div class="text-[#1db489] ml-1">3%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped></style>
