<template>
  <div id="app">
    <top-bar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import TopBar from "@/components/TopBar/";
  export default {
    components: {
      TopBar
    }
  }
</script>
<style src="./assets/scss/main.scss" lang="scss"></style>
