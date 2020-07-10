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
                curvature: 0.5,
                scale: '100',
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
            const shiftW = (w / 2) * (1 - curvature);
            const shiftH = (h / 2) * (1 - curvature);

            this.path = `
                M 0, ${h / 2}
                C 0, ${shiftW} ${shiftH}, 0 ${w / 2}, 0
                S ${w}, ${shiftH} ${w}, ${h / 2}
                  ${w - shiftW}, ${h - 0} ${w / 2}, ${h}
                  0, ${w - shiftH} 0, ${h / 2}
            `;
        },
        handleControlChange({ id, value }) {
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
        />
        <GeneratorControls
            :initial-fill="squircleOpts.fill"
            @controls-changed="handleControlChange"
        />
    </div>
</template>

<style scoped>
.generator {
    position: relative;
    display: grid;
    grid-template-columns: 368px 1fr;
    grid-gap: var(--spacing-6);
    padding: var(--spacing-5);
    background: #fff;
    box-shadow: 0 24px 32px rgba(16, 42, 67, 0.075);
    border-radius: 48px;
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
}
</style>
