<script>
import TheHeader from './components/TheHeader.vue';
import TheGenerator from './components/TheGenerator.vue';
import TheWaveBackground from './components/TheWaveBackground.vue';
import TheSquircleExplosion from './components/TheSquircleExplosion.vue';
import TheInfoSection from './components/TheInfoSection.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheGenerator,
        TheWaveBackground,
        TheSquircleExplosion,
        TheInfoSection,
    },
    mounted() {
        function handleFirstTab(e) {
            if (e.keyCode === 9) {
                document.body.classList.add('user-is-tabbing');
                window.removeEventListener('keydown', handleFirstTab);
            }
        }
        window.addEventListener('keydown', handleFirstTab);
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
            <TheInfoSection />
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
    max-width: 62rem;
    margin: 0 auto;
    margin-bottom: var(--spacing-8);
}

.squircle-explosion {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 540px;
}

@media only screen and (max-width: 62rem) {
    .generator {
        margin-bottom: var(--spacing-7);
    }
}
</style>
