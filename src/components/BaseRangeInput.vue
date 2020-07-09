<script>
export default {
    name: 'BaseRangeInput',
    props: {
        name: {
            type: String,
            required: true,
        },
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        step: {
            type: Number,
            required: true,
        },
    },
    methods: {
        handleInput(e) {
            this.$emit('change', e);
        },
    },
};
</script>

<template>
    <input
        :id="name"
        :value="value"
        type="range"
        :name="name"
        :min="min"
        :max="max"
        :step="step"
        @input="handleInput"
    />
</template>

<style scoped>
input {
    position: relative;
    min-width: 0;
    max-width: 100%;
    cursor: pointer;
    border: 0;
}

input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;

    --thumb-width: 16px;
    --thumb-height: 32px;
    --thumb-radius: 16px;
    --thumb-bg: var(--grey-900);
    --track-height: 4px;
    --track-radius: 2px;
    --track-bg: var(--grey-000);
}

input[type='range']:focus {
    outline: none;
}

input[type='range']:hover {
    --track-bg: var(--grey-100);
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: var(--thumb-height);
    width: var(--thumb-width);
    margin-top: -14px;
    border-radius: var(--thumb-radius);
    background: var(--thumb-bg);
    cursor: pointer;
}

input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    border: 0;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border-radius: var(--thumb-radius);
    background: var(--thumb-bg);
    cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
    border: 0;
    width: 100%;
    height: var(--track-height);
    cursor: pointer;
    background: var(--track-bg);
    border-radius: var(--track-radius);
}

input[type='range']::-moz-range-track {
    border: 0;
    width: 100%;
    height: var(--track-height);
    cursor: pointer;
    background: var(--track-bg);
    border-radius: var(--track-radius);
}
</style>
