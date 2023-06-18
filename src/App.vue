<template>
  <div id="container">
    <div id="left">
      <ComponentPanel></ComponentPanel>
    </div>
    <div id="content">
      <div class="outsidebox">
        <div class="canva-page">
          <RootComponent :root="root"></RootComponent>
        </div>
      </div>
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
      width: '100%',
      height: '100%',
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
  background-color: #e9ebed;
}

#left {
  width: 300px;
  background-color: #fff;
}

#content {
  position: relative;
  display: flex;
  width: calc(100vw - 250px);
  justify-content: center;
  height: calc(100vh - 63px);
  overflow: auto;
  direction: ltr;
  /* overflow: scroll; */
}

#content::-webkit-scrollbar {
  width: 50px;
}

#content::-webkit-scrollbar-thumb {
  width: 10px;
}

#content .outsidebox {
  padding: 50px 50px 0;
  transform-origin: 0 0;

}



.canva-page {
  width: 786px;
  background: #ffffff;
  box-shadow: 0 3px 6px 1px #00000040;
  transition: all ease-in-out .4s;
  border: 1px solid #aaaaaa;
}

#right {
  width: 300px;
}

/* .header {
  width: 1376px;
  margin: 0 auto;
} */
</style>
