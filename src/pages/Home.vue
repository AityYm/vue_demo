<template>
    <div>
      <h2>Home</h2>
      <ul class="nav nav-tabs">
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
      </ul>
      <div>
        <router-view></router-view>
        <hr>
      </div>
    </div>
</template>
<script>
    export default{}
</script>

<style>

</style>
