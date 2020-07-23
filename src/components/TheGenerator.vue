<script>
import GeneratorPreview from './GeneratorPreview.vue';
import GeneratorControls from './GeneratorControls.vue';

export default {
    name: 'TheGenerator',
    components: {
        GeneratorPreview,
        GeneratorControls,
    },
    data() {
        return {
            squircleOpts: {
                curvature: 0.75,
                scale: 150,
                rotation: 0,
                fill: '#FADB5F',
            },
            path: '',
        };
    },
    mounted() {
        this.setPath(
            this.squircleOpts.scale,
            this.squircleOpts.scale,
            this.squircleOpts.curvature
        );
    },
    methods: {
        setPath(w = 100, h = 100, curvature = 0.5) {
            const curveWidth = (w / 2) * (1 - curvature);
            const curveHeight = (h / 2) * (1 - curvature);

            this.path = `
                M 0, ${h / 2}
                C 0, ${curveWidth} ${curveHeight}, 0 ${w / 2}, 0
                S ${w}, ${curveHeight} ${w}, ${h / 2}
                    ${w - curveWidth}, ${h - 0} ${w / 2}, ${h}
                    0, ${w - curveHeight} 0, ${h / 2}
            `;
        },
        handleControlChange({ id, value }) {
            if (id === 'scale') value = ~~value;
            this.squircleOpts[id] = value;

            this.setPath(
                this.squircleOpts.scale,
                this.squircleOpts.scale,
                this.squircleOpts.curvature
            );
        },
    },
};
</script>

<template>
    <div class="generator">
        <GeneratorPreview
            :path="path"
            :fill="squircleOpts.fill"
            :scale="squircleOpts.scale"
            :rotation="squircleOpts.rotation"
        />
        <GeneratorControls
            :initial-fill="squircleOpts.fill"
            :scale="squircleOpts.scale"
            :rotation="squircleOpts.rotation"
            :curvature="squircleOpts.curvature"
            @controls-changed="handleControlChange"
        />
    </div>
</template>

<style scoped>
.generator {
    position: relative;
    display: grid;
    grid-template-columns: 418px 1fr;
    grid-gap: var(--spacing-6);
    padding: var(--spacing-5);
    background: #fff;
    box-shadow: 0 24px 32px rgba(16, 42, 67, 0.075);
    border-radius: 48px;
}

@media screen and (max-width: 64rem) {
    .generator-wrapper {
        width: 100%;
    }

    .generator {
        grid-template-columns: 1fr;
        grid-gap: var(--spacing-5);
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
}
</style>
