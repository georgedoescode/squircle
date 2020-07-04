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
    align-items: center;
    flex-wrap: wrap;
}

.color-swatch__color {
    width: calc(20% - 0.5rem);
    height: var(--spacing-4);
    border-radius: 8px;
    cursor: pointer;
    justify-self: center;
    flex-shrink: 0;
}
</style>
