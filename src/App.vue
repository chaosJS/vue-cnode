<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slideBar"></router-view>
      <router-view name="main"></router-view>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/Header";
import PostList from "./components/PostList";
export default {
  name: "App",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
.main {
  margin: 0 auto;
  background-color: #e1e1e1;
  overflow: hidden;
}
</style>
