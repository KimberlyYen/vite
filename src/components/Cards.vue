<script>
import { onMounted, reactive } from "vue";


export default {
  props: ["title", "checked"],
  setup() {
    // function getChecked(params) {
    //   console.log(checked)
    // }

    const checked = reactive(false)
    console.log(checked)
    
    return {
      // getChecked,
      checked,
    };
  },
};
</script>


<template>
  <div class="w-full h-52 bg-[#252a41] rounded mb-4">
    <div class="h-2 bg-[#198ff5] rounded-t-lg"></div>
    <div class="flex flex-col justify-center pt-4 text-center">
      <input
        :checked="checked"
        type="checkbox"
        class="flex mb-4 ml-2 mr-auto"
        
      />
      <label for="option"></label>
      <div class="flex flex-row justify-center text-center">
        <img class="w-6 h-6" src="../images/icon-facebook.svg" alt="FB" />
        <p class="ml-2 font-bold text-[#8b97c6]">@nathanf</p>
      </div>
      <p class="p-3 pt-2 text-4xl font-bold text-white tittle">{{ title }}</p>
      <p
        class="pt-5 text-sm font-light font-Inter text-[#8b97c6] tracking-widest"
      >
        Followers
      </p>
    </div>
  </div>
</template>


<style scoped>
.tittle {
  word-wrap: break-word;
}
</style>
