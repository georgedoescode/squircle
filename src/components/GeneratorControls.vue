<script>
import ColorSwatch from './ColorSwatch.vue';

export default {
    name: 'GeneratorControls',
    components: {
        ColorSwatch,
    },
    data() {
        return {
            color: '#1f2933',
        };
    },
};
</script>

<template>
    <div>
        <div class="generator-controls">
            <label for="scaleX" class="generator-controls__label">
                Scale X
            </label>
            <BaseRangeInput name="scaleX" class="generator-controls__slider" />
            <label for="scaleY" class="generator-controls__label">
                Scale Y
            </label>
            <BaseRangeInput name="scaleY" class="generator-controls__slider" />
            <label for="roundness" class="generator-controls__label">
                Roundness
            </label>
            <BaseRangeInput
                name="roundness"
                class="generator-controls__slider"
            />
            <label class="generator-controls__label">Fill</label>
            <ColorSwatch
                class="generator-controls__color-picker"
                :colors="[
                    '#1f2933',
                    '#323f4b',
                    '#3e4c59',
                    '#52606d',
                    '#616e7c',
                ]"
            />
        </div>
    </div>
</template>

<style scoped>
.generator-controls {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: minmax(var(--spacing-5), max-content);
    grid-row-gap: var(--spacing-5);
    width: 100%;
}

.generator-controls__label {
    grid-column: 1;
    align-self: center;
    margin-right: var(--spacing-4);
    font-size: var(--font-size-3);
    font-weight: 700;
}

.generator-controls__slider {
    grid-column: 2;
}
</style>
