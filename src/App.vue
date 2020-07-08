<script>
import TheHeader from './components/TheHeader.vue';
import TheGenerator from './components/TheGenerator.vue';
import TheWaveBackground from './components/TheWaveBackground.vue';
import TheSquircleExplosion from './components/TheSquircleExplosion.vue';
import SquircleDemo from '@/assets/img/squircle-demo.svg';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheGenerator,
        TheWaveBackground,
        TheSquircleExplosion,
        SquircleDemo,
    },
};
</script>

<template>
    <div class="app">
        <TheHeader class="app__header" />
        <TheWaveBackground class="app__background" />
        <TheSquircleExplosion />
        <div class="app__content">
            <TheGenerator />
            <div class="app__content-grid">
                <p class="about-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod maxime quam sequi, corrupti quibusdam velit dolore
                    nobis ex! Nihil sunt placeat magni dolorem in quaerat
                    aspernatur sapiente illum mollitia aut assumenda corporis
                    inventore deleniti, corrupti sit. Ipsa dicta tenetur dolores
                    eligendi enim quisquam adipisci magni! Commodi voluptates
                    neque maiores est!
                </p>
                <SquircleDemo class="squircle-demo" />
            </div>
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
    padding-bottom: var(--spacing-6);
}

.generator {
    max-width: 56rem;
    margin: 0 auto;
    margin-bottom: var(--spacing-9);
}

.squircle-explosion {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 540px;
}

.app__content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
}

.about-text {
    font-size: var(--font-size-3);
    line-height: 1.75;
    margin-bottom: var(--spacing-5);
}

.squircle-demo {
    justify-self: end;
}
</style>
