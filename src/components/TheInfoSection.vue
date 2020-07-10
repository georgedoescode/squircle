<script>
import SquircleHero from '@/assets/img/squircle-demo.svg?inline';

export default {
    name: 'TheInfoSection',
    components: {
        SquircleHero,
    },
};
</script>

<template>
    <div class="info-section">
        <SquircleHero class="info-section__squircle-hero" />
        <div class="info-section__text">
            <div class="info-section__squiggle"></div>
            <p class="info-section__paragraph">
                Looking to add some premium squircley goodness to add to your
                designs? Squircley is all you need to start creating beautiful
                organic shapes ready to use for logos, icons and background
                images.
            </p>
            <p class="info-section__paragraph">
                The generator exports SVG files which can be copied straight to
                the clipboard for dropping into your HTML / CSS or downloaded to
                your computer ready to use in your design software of choice
                (Figma, Sketch, Framer, etc)
            </p>
            <p class="info-section__paragraph">Have fun! 🎨</p>
        </div>
    </div>
</template>

<style scoped>
.info-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    place-items: center;
}

.info-section__text {
    grid-column: 2 / 8;
}

.info-section__paragraph {
    font-size: var(--font-size-4);
    line-height: 1.75;
    margin-bottom: var(--spacing-5);
}

.info-section__squircle-hero {
    justify-self: end;
    grid-column: 9 / 13;
    grid-row: 1;
    margin-top: 0;
}

.info-section__squiggle {
    width: var(--spacing-9);
    height: 8px;
    background-image: url('../assets/img/wiggle.svg');
    background-size: 58px auto;
    background-position: center center;
    background-repeat: repeat-x;
    margin-bottom: var(--spacing-8);
}

@media only screen and (max-width: 68rem) {
    .info-section {
        padding: 0 var(--spacing-4);
    }
    .info-section__text {
        grid-column: 1 / 8;
    }
}

@media only screen and (max-width: 56rem) {
    .info-section {
        display: block;
    }

    .info-section__squircle-hero {
        width: 120px;
        height: 120px;
        float: right;
        margin-left: var(--spacing-4);
        margin-top: var(--spacing-9);
    }

    .info-section__paragraph {
        font-size: var(--font-size-3);
    }
}
</style>
