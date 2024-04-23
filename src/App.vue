<script>
import { onMounted, reactive } from "vue";
import Card from "./components/Cards.vue";
import OverView from "./components/OverView.vue";

export default {
  props: ["title"],
  components: {
    Card,
    OverView,
  },
  setup() {
    // 資料寫死
    // const cardsContent = reactive([
    //   {
    //     name: "蛋餅",
    //     price: 30,
    //     vegan: false,
    //   },
    //   {
    //     name: "飯糰",
    //     price: 35,
    //     vegan: false,
    //   },
    //   {
    //     name: "小籠包",
    //     price: 60,
    //     vegan: false,
    //   },
    //   {
    //     name: "蘿蔔糕",
    //     price: 30,
    //     vegan: true,
    //   },
    // ]);

    // console.log(typeof cardsContent)

    // 資料來自 API
    const cardsContentByAPI = reactive([]);
    function getCard() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          cardsContentByAPI.push(json);
          cardsContentByAPI.map((item) => {
            item.map((item) => {
              cardsContentByAPI.push(item);
            });
            // shift() 方法，會移除陣列的第一個元素
            cardsContentByAPI.shift() 
            console.log(cardsContentByAPI.length)
          });
        });
    }

    onMounted(() => {
      getCard();
    });

    return {
      // cardsContent,
      cardsContentByAPI,
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
      v-for="(item, index) in cardsContentByAPI"
      :key="index"
      :title="item.username"
    />

    <!-- tittle -->
    <h1 class="mt-5 mb-3 text-xl font-bold text-white">
      Social Media Dashboard
    </h1>
    <!-- Overview -->
    <OverView :title="87" />
  </div>
</template>

<style scoped></style>
