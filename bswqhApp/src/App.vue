<template>
    <div id="app">
        <div class="section">
            <router-view />
        </div>
        <div class="footer">
            <router-link to="/">
                <dl>
                    <dt></dt>
                    <dd>首页</dd>
                </dl>
            </router-link>
            <router-link to="/classification">
                <dl>
                    <dt></dt>
                    <dd>分类</dd>
                </dl>
            </router-link>
            <router-link to="/micro_shop">
                <dl>
                    <dt></dt>
                    <dd>微店</dd>
                </dl>
            </router-link>
            <router-link to="/shopping_cart">
                <dl>
                    <dt></dt>
                    <dd>购物车</dd>
                </dl>
            </router-link>
            <router-link to="/mine">
                <dl>
                    <dt></dt>
                    <dd>我的</dd>
                </dl>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
