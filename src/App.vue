<script>
import TheHeader from './components/TheHeader.vue';
import TheGenerator from './components/TheGenerator.vue';
import TheWaveBackground from './components/TheWaveBackground.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheGenerator,
        TheWaveBackground,
    },
};
</script>

<template>
    <div class="app">
        <TheHeader class="app__header" />
        <TheWaveBackground class="app__background" />
        <div class="app__content">
            <TheGenerator />
        </div>
    </div>
</template>

<style scoped>
.app {
    display: grid;
    grid-template-rows: max-content 1fr;
    min-height: 100vh;
}

.header {
    grid-row: 1;
}

.app__content,
.app__background {
    grid-column: -1 / 1;
    grid-row: 2;
}
</style>
