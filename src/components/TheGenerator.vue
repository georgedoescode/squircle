<script>
import GeneratorPreview from './GeneratorPreview.vue';
import GeneratorControls from './GeneratorControls.vue';
import GeneratorExportOptions from './GeneratorExportOptions.vue';

export default {
    name: 'TheGenerator',
    components: {
        GeneratorPreview,
        GeneratorControls,
        GeneratorExportOptions,
    },
    data() {
        return {
            squircleOpts: {
                n: 4,
                a: 50,
                b: 50,
            },
            points: [],
        };
    },
    mounted() {
        this.setPoints();
    },
    methods: {
        setPoints() {
            this.points = [];
            for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
                const na = 2 / this.squircleOpts.n;
                const x =
                    Math.pow(Math.abs(Math.cos(angle)), na) *
                    this.squircleOpts.a *
                    this.sgn(Math.cos(angle));
                const y =
                    Math.pow(Math.abs(Math.sin(angle)), na) *
                    this.squircleOpts.b *
                    this.sgn(Math.sin(angle));

                this.points.push([x, y]);
            }
        },
        sgn(value) {
            if (value > 0) {
                return 1;
            } else if (value < 0) {
                return -1;
            } else {
                return 0;
            }
        },
    },
};
</script>

<template>
    <div class="generator">
        <GeneratorPreview :points="points" />
        <GeneratorControls />
        <GeneratorExportOptions class="generator__export-opts" />
    </div>
</template>

<style scoped>
.generator {
    position: relative;
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-gap: var(--spacing-4);
    padding: var(--spacing-4);
    background: #fff;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.075);
    border-radius: 32px;
}

.generator__export-opts {
    position: absolute;
    bottom: -24px;
    right: calc(var(--spacing-5));
}

@media screen and (max-width: 48rem) {
    .generator-wrapper {
        width: 100%;
    }

    .generator {
        grid-template-columns: 1fr;
    }

    .generator__preview-section {
        width: 100%;
        max-width: 320px;
        justify-self: center;
    }

    .generator__control-section {
        padding: 0;
    }
}
</style>
