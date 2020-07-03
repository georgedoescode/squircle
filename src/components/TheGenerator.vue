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
                <div class="generator__control-section-footer">
                    <button class="generator-reset-btn">Reset</button>
                    <GeneratorExportOptions />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.generator-wrapper {
    max-width: var(--spacing-15);
    margin: 0 auto;
}

.generator {
    display: flex;
    margin: 0 auto;
    padding: var(--spacing-5);
    background: #fff;
    border-radius: 16px;
}

.generator__preview-section {
    position: relative;
    width: 45%;
    flex-shrink: 0;
    margin-right: var(--spacing-5);
}

.generator__control-section {
    flex-grow: 1;
    min-height: 100%;
    padding: var(--spacing-2);
}

.generator__control-section-footer {
    display: flex;
    height: var(--spacing-5);
    margin-top: var(--spacing-5);
}

.generator-reset-btn {
    align-self: flex-end;
    padding: 0;
    font-size: var(--font-size-1);
    border: 0;
    cursor: pointer;
}
</style>
