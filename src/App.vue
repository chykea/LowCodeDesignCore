

<template>
  <div id="container">
    <!-- <div class="header">
      <router-link to="/">首页</router-link>
    </div>
    <router-view></router-view> -->
    <div id="left"></div>
    <div id="content">
      <Selected>
        <button>123465</button>
      </Selected>
    </div>
    <div id="right"></div>
  </div>
</template>
<script setup>
import Selected from './components/abstract/selected.vue';

</script>
<style scoped>
#container {
  height: 100vh;
  width: 100%;
  display: flex;

  /* flex-direction: column; */
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
} */</style>
