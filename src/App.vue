<script>
    export default {
        name: 'App',
    };
</script>

<template>
    <main>
        <router-view />
    </main>
</template>

<style scoped>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        font-family: 'Avenir', system-ui;
    }
</style>
