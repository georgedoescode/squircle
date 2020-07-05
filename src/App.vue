<script>
import TheHeader from './components/TheHeader.vue';
import TheGenerator from './components/TheGenerator.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheGenerator,
    },
};
</script>

<template>
    <div class="app">
        <TheHeader />
        <TheGenerator />
        <div class="app__background">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill-opacity="1"
                    d="M0,64L80,96C160,128,320,192,480,181.3C640,171,800,85,960,69.3C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <div class="app__background-fill"></div>
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

.generator-wrapper,
.app__background {
    grid-column: -1 / 1;
    grid-row: 2;
}

.app__background {
    display: flex;
    flex-direction: column;
}

.app__background svg {
    margin-top: var(--spacing-7);
    fill: #fff;
}

.app__background-fill {
    flex-grow: 1;
    background: #fff;
}
</style>
