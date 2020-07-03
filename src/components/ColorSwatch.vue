<script>
export default {
    name: 'ColorSwatch',
    props: {
        colors: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template>
    <div class="color-swatch">
        <div
            v-for="(color, index) in colors"
            :key="color + index"
            class="color-swatch__color"
            :style="{
                background: color,
            }"
        ></div>
    </div>
</template>

<style>
.color-swatch {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.color-swatch__color {
    width: var(--spacing-4);
    height: var(--spacing-4);
    border-radius: 50%;
    align-self: center;
    cursor: pointer;
}
</style>
