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
    <div class="generator-controls">
        <div class="generator-controls__inputs">
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
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--spacing-13);
    width: 100%;
    padding: 0 var(--spacing-3);
}

.generator-controls__inputs {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: minmax(var(--spacing-5), max-content);
    grid-row-gap: var(--spacing-5);
    justify-content: center;
    width: 100%;
}

.generator-controls__label {
    grid-column: 1;
    align-self: center;
    margin-right: var(--spacing-4);
    font-size: var(--font-size-4);
    font-weight: 700;
}

.generator-controls__slider {
    grid-column: 2;
}

.generator-controls__color-picker {
    grid-column: -1 / 1;
}

@media only screen and (max-width: 48rem) {
    .generator-controls {
        padding: 0 var(--spacing-4);
        padding-bottom: var(--spacing-6);
    }
    .generator-controls__inputs {
        grid-row-gap: var(--spacing-5);
    }
    .generator-controls__label {
        font-size: var(--font-size-3);
    }
}
</style>
