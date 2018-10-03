<template>
  <div class="header">
    <div class="logo">
      <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
    </div>
    <ul>
      <li>
        <router-link :to="{name:'root'}">
          首页
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  background-color: #444;
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  vertical-align: middle;
}
img {
  width: 130px;
  margin: 0 auto;
}
ul {
  list-style: none;
  margin: 0;
}
ul a {
  color: #777;
  text-decoration: none;
  text-shadow: none;
  color: #ccc;
}
</style>
