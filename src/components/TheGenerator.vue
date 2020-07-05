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
            <GeneratorPreview />
            <GeneratorControls />
            <GeneratorExportOptions class="generator__export-opts" />
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
    grid-gap: var(--spacing-4);
    margin: 0 auto;
    padding: var(--spacing-4);
    background: #fff;
    border: 1px solid var(--grey-100);
    border-radius: 24px;
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
