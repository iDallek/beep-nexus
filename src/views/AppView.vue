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
        border: 1px solid red;
        width: 100%;
        height: 90px;
    }

</style>