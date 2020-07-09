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
                curvature: 8,
                scale: 50,
                detail: 0.1,
                fill: '#1f2933',
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
            for (
                let angle = 0;
                angle < Math.PI * 2;
                angle += this.squircleOpts.detail
            ) {
                const na = 2 / this.squircleOpts.curvature;
                const x =
                    Math.pow(Math.abs(Math.cos(angle)), na) *
                    this.squircleOpts.scale *
                    this.sgn(Math.cos(angle));
                const y =
                    Math.pow(Math.abs(Math.sin(angle)), na) *
                    this.squircleOpts.scale *
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
        handleControlChange({ id, value }) {
            this.squircleOpts[id] = value;
            this.setPoints();
        },
    },
};
</script>

<template>
    <div class="generator">
        <GeneratorPreview :points="points" :fill="squircleOpts.fill" />
        <GeneratorControls
            :initial-fill="squircleOpts.fill"
            @controls-changed="handleControlChange"
        />
        <GeneratorExportOptions class="generator__export-opts" />
    </div>
</template>

<style scoped>
.generator {
    position: relative;
    display: grid;
    grid-template-columns: 368px 1fr;
    grid-gap: var(--spacing-5);
    padding: var(--spacing-5);
    background: #fff;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.075);
    border-radius: 32px;
}

.generator__export-opts {
    position: absolute;
    bottom: -24px;
    right: calc(var(--spacing-5));
}

@media screen and (max-width: 56rem) {
    .generator-wrapper {
        width: 100%;
    }

    .generator {
        grid-template-columns: 1fr;
        padding: 0;
        background: none;
        box-shadow: none;
    }

    .generator__preview-section {
        justify-self: center;
        width: 100%;
        max-width: 320px;
    }

    .generator__control-section {
        padding: 0;
    }

    .generator__export-opts {
        position: relative;
        bottom: auto;
        right: auto;
        max-width: var(--spacing-13);
        margin: 0 auto;
        padding: 0 var(--spacing-4);
    }
}
</style>
