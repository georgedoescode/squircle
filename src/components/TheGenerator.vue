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
};
</script>

<template>
    <div class="generator-wrapper">
        <div class="generator">
            <div class="generator__preview-section">
                <GeneratorPreview />
            </div>
            <div class="generator__control-section">
                <GeneratorControls />
                <GeneratorExportOptions class="generator__export-opts" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.generator-wrapper {
    width: var(--spacing-15);
    margin: 0 auto;
}

.generator {
    position: relative;
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-gap: var(--spacing-5);
    margin: 0 auto;
    padding: var(--spacing-5);
    background: #fff;
    border-radius: 24px;
}

.generator__control-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    padding: 0 var(--spacing-3);
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
