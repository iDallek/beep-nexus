<script setup>
  import AppView from "@/views/AppView.vue"
  import HeaderApp from '@/components/HeaderApp.vue';
</script>

<template>
  <HeaderApp />
  <AppView />
</template>

<style>
header {
    width: 100%;
    height: 80px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }

</style>
