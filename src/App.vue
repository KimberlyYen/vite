<script>
import { onMounted, reactive } from "vue";
import Card from "./components/Cards.vue";
import OverView from "./components/OverView.vue";

export default {
  props: ["title", "checked"],
  components: {
    Card,
    OverView,
  },
  setup() {
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
            cardsContentByAPI.shift();
            // console.log(cardsContentByAPI.length)
          });
        });
    }

    //當我點選全選時
    //我要傳值進到 card 元件
    //使得所有 checkBox 都被勾選
    const isChecked = reactive(true)
    function select(){
      console.log(isChecked)
      if ( isChecked === true ){
        checked = true
      }
    }

    onMounted(() => {
      getCard();
    });

    return {
      cardsContentByAPI,
      isChecked,
      select,
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

    <!-- checkAll -->
    <div class="flex flex-row mr-auto" @click="$emit('someEvent')">
      <input type="checkbox" class="flex mb-4 ml-2 mr-auto" id="option-all" 
      />
      <label for="option-all" class="pb-4 pl-2 text-white">Select All</label>
    </div>
    <!-- Card -->
    <Card
      v-for="(item, index) in cardsContentByAPI"
      :key="index"
      :title="item.username"
      :checked="isChecked"
      @some-event="isChecked"
    />

    <!-- tittle -->
    <h1 class="mt-5 mb-3 text-xl font-bold text-white">
      Overview - Today
    </h1>
    <!-- Overview -->
    <OverView :title="87" />
  </div>
</template>

<style scoped></style>
