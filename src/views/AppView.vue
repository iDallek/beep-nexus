<template>
    <header>
        <HeaderApp />
    </header>
    <main>
        <ReadXlsx />
    </main>
</template>

<script>
    import HeaderApp from '@/components/HeaderApp.vue';
    // Temp
    import ReadXlsx from '@/components/ReadXlsx.vue';

    export default {
        components: {
            HeaderApp,
            ReadXlsx
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 80px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }

</style>