<template>
  <div id="app">
    <MyToolbar/>
    <div class="grid">
        <div id="" class="col-fixed" style="width:200px; overflow: hidden;">
          <MySidebarmenu id="sidebar_id"/>
        </div>
        <div id="" class="col" style="padding: 0px; overflow: hidden; height: 100vh; padding-top: 8px;">
          <router-view id="router_id"/>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  max-height: 100vh;
  overflow:hidden;
  /* text-align: center;
  color: #2c3e50; */
}

.CodeMirror {
  height: calc(100% - 240px) !important;
}

#router_id {
  height: 100% !important;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  margin: 0;
}

#settings_button{
  display: block;
  position: absolute;
  width: 52px;
  height: 52px;
  left: calc(100% - 52px);
  top: calc(50% - 52px);
  z-index: 1000;
}

#sidebar_cont{
  max-width: 150px;
  height: 94vh;
  display: inline-block;
  overflow: hidden;
}

#sidebar_id{
  height: 100%;
}

.p-menubar {
  height: 9vh;
  border: 0px !important;
  border-radius: 0px !important;
  padding: 0px !important;
}

.p-menu {
  border: 0px !important;
  border-radius: 0px !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
