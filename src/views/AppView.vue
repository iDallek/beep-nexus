<template>
    <header>
        <HeaderApp />
    </header>
    <main>
        Conteudo
    </main>
</template>

<script>
    import HeaderApp from '@/components/HeaderApp.vue';

    export default {
        components: {
            HeaderApp
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 80px;
        box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    }

</style>