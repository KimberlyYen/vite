<script>
import { reactive, ref } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Cards.vue";
export default {
  props: ["title"],
  components: {
    Card,
  },
  setup() {
    const cardsContent = reactive([
      {
        name: "蛋餅",
        price: 30,
        vegan: false,
      },
      {
        name: "飯糰",
        price: 35,
        vegan: false,
      },
      {
        name: "小籠包",
        price: 60,
        vegan: false,
      },
      {
        name: "蘿蔔糕",
        price: 30,
        vegan: true,
      },
    ]);

    return {
      cardsContent,
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-center pb-10 m-10 text-left">
    <!-- tittle -->
    <div>
      <h1 class="text-2xl font-bold text-white">Social Media Dashboard</h1>
      <h2
        class="mb-5 border-b border-desaturatedBlue text-[#8b97c6] text-sm font-bold"
      >
        Total Followers: 23,004
      </h2>
    </div>

    <!-- Card -->
    <Card
      v-for="(item, index) in cardsContent"
      :key="index"
      :title="item.name"
    />
  </div>
</template>

<style scoped></style>
