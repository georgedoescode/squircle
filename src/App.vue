<script>
import TheHeader from './components/TheHeader.vue';
import TheGenerator from './components/TheGenerator.vue';
import TheWaveBackground from './components/TheWaveBackground.vue';
import TheSquircleExplosion from './components/TheSquircleExplosion.vue';
import SquircleDemo from '@/assets/img/squircle-demo.svg?inline';

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
                <SquircleDemo class="squircle-demo" />
                <div class="app__content-text">
                    <div class="squiggle"></div>
                    <p class="longform-paragraph">Hey there 👋</p>
                    <p class="longform-paragraph">
                        Looking for some top-tier squircles (square x circle) to
                        add to your designs? You’ve come to the right place!
                        Squircley is a curve based generator for creating
                        beautiful squircles - ready to use for logos, icons,
                        weird blobby characters and more.
                    </p>
                    <p class="longform-paragraph">
                        Squircley exports SVG files which can be copied straight
                        to the clipboard for dropping into your HTML / CSS or
                        downloaded to your computer ready to use in your design
                        software of choice (Figma, Sketch, Framer, etc)
                    </p>
                    <p class="longform-paragraph">
                        Wondering WTF a squircle actually is? Check out
                        <a href="https://youtu.be/z86cx2A4_3E"
                            >this awesome video
                        </a>
                        by Dan Shiffman or
                        <a href="https://mathworld.wolfram.com/Squircle.html"
                            >this page</a
                        >
                        on Wolfram MathWorld.
                    </p>
                    <p class="longform-paragraph">Enjoy! ❤️</p>
                </div>
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
    margin-bottom: var(--spacing-8);
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
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    place-items: center;
}

.app__content-text {
    grid-column: 2 / 8;
}

.longform-paragraph {
    font-size: var(--font-size-4);
    line-height: 1.75;
    margin-bottom: var(--spacing-5);
}

.squircle-demo {
    justify-self: end;
    grid-column: 9 / 13;
    grid-row: 1;
    margin-top: var(--spacing-7);
}

.squiggle {
    width: var(--spacing-9);
    height: 8px;
    background-image: url('./assets/img/wiggle.svg');
    background-size: 58px auto;
    background-position: center center;
    background-repeat: repeat-x;
    margin-bottom: var(--spacing-7);
}

@media only screen and (max-width: 68rem) {
    .app__content-grid {
        padding: 0 var(--spacing-4);
    }
    .app__content-text {
        grid-column: 1 / 8;
    }
}

@media only screen and (max-width: 56rem) {
    .generator {
        margin-bottom: var(--spacing-7);
    }

    .app__content-grid {
        display: block;
    }

    .squircle-demo {
        width: 120px;
        height: 120px;
        float: right;
        margin-left: var(--spacing-4);
        margin-top: var(--spacing-9);
    }

    .longform-paragraph {
        font-size: var(--font-size-3);
    }
}
</style>
