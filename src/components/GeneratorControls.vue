<script>
export default {
    name: 'GeneratorControls',
};
</script>

<template>
    <div class="generator-controls">
        <label for="scaleX" class="generator-controls__label">Scale X</label>
        <BaseRangeInput name="scaleX" />
        <label for="scaleX" class="generator-controls__label">Scale Y</label>
        <BaseRangeInput name="scaleY" />
        <label for="roundness" class="generator-controls__label"
            >Roundness</label
        >
        <BaseRangeInput name="roundness" />
    </div>
</template>

<style scoped>
.generator-controls {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: max-content;
    width: 100%;
}
</style>
