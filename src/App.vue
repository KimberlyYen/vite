<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Cards.vue";
export default {
  props: ["title"],
  components: {
    Card,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="flex flex-col justify-center pb-10 m-10 text-left">
    <div>
      <h1 class="text-2xl font-bold text-white">Social Media Dashboard</h1>
      <h2
        class="mb-5 border-b border-desaturatedBlue text-[#8b97c6] text-sm font-bold"
      >
        Total Followers: 23,004
      </h2>
    </div>
    <Card title="123" />
  </div>
</template>

<style scoped></style>
