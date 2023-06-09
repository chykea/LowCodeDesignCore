<template>
  <div id="container">
    <!-- <div class="header">
      <router-link to="/">首页</router-link>
    </div> -->

    <!-- <router-view></router-view> -->

    <div id="left"></div>
    <div id="content">
      <RootComponent :root="store.fileContent.get(1)"></RootComponent>
    </div>
    <div id="right"></div>
  </div>
</template>
<script setup>

import { mainStore } from './store/index'
import useTransformer from './components/userComponents/transformer';
import RootComponent from './components/userComponents/rootComponent.vue';
const store = mainStore()
useTransformer()

// 抽象组件可以触发子传父
// const clickTest = (value) => {
//   console.log(value);
// }



</script>
<style scoped>
#container {
  height: 100vh;
  width: 100%;
  display: flex;
}

#left {
  flex: 1;
}

#content {
  flex: 3;
}

#right {
  flex: 1;
}

/* .header {
  width: 1376px;
  margin: 0 auto;
} */
</style>
