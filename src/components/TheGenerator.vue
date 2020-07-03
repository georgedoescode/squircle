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
                <GeneratorExportOptions />
            </div>
        </div>
    </div>
</template>

<style scoped>
.generator-wrapper {
    padding: 0 var(--spacing-4);
}

.generator {
    display: flex;
    max-width: var(--spacing-15);
    margin: 0 auto;
    padding: var(--spacing-4);
    background: #fff;
    border-radius: 16px;
}

.generator__preview-section {
    position: relative;
    width: 50%;
    flex-shrink: 0;
    margin-right: var(--spacing-4);
}

.generator__control-section {
    display: grid;
    grid-template-rows: 1fr max-content;
    flex-grow: 1;
    min-height: 100%;
}
</style>
