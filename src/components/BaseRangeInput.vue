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
    min-width: 0;
    max-width: 100%;
    cursor: pointer;
}
</style>
