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
            <p class="about-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                maxime quam sequi, corrupti quibusdam velit dolore nobis ex!
                Nihil sunt placeat magni dolorem in quaerat aspernatur sapiente
                illum mollitia aut assumenda corporis inventore deleniti,
                corrupti sit. Ipsa dicta tenetur dolores eligendi enim quisquam
                adipisci magni! Commodi voluptates neque maiores est!
            </p>
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

.app__content {
    display: grid;
    grid-template-columns:
        minmax(0, 1fr)
        minmax(0, 56rem)
        minmax(0, 1fr);
    grid-auto-rows: max-content;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: var(--spacing-6);
}

.generator {
    grid-row: 1;
    grid-column: 2;
    margin-bottom: var(--spacing-8);
}

.about-text {
    grid-row: 2;
    grid-column: -1 / 1;
    font-size: var(--font-size-3);
    line-height: 1.75;
    width: 50%;
}
</style>
