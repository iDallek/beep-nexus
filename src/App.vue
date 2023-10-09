<script setup>
  import HeaderApp from '@/components/HeaderApp.vue';
import { RouterView } from "vue-router";
</script>

<template>
  <div class="headerApp">
    <HeaderApp />
  </div>
  
  <RouterView class="router"/>
</template>

<style>
  .router {
    height: 100px;
  }

</style>
