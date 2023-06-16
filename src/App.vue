<template>
  <div id="container">
    <div id="left">
      <ComponentPanel></ComponentPanel>
    </div>
    <div id="content">
      <RootComponent :root="root"></RootComponent>
    </div>
    <div id="right"></div>
  </div>
</template>
<script setup>

import { mainStore } from './store/index'
import ComponentPanel from './components/Panel/ComponentPanel.vue';

import useTransformer from './components/userComponents/transformer';
import RootComponent from './components/userComponents/rootComponent.vue';

const store = mainStore()
useTransformer()

const root = {
  id: 1,
  tag: 'LayoutContent',
  props: {
    style: {
    }
  },
  childrens: [],
  values: {}
}

</script>
<style scoped>
#container {
  height: 100vh;
  width: 100%;
  display: flex;
}

#left {
  width: 300px;
}

#content {
  flex: 1;
}

#right {
  width: 300px;
}

/* .header {
  width: 1376px;
  margin: 0 auto;
} */
</style>
