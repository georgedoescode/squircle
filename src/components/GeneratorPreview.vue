<script>
export default {
    name: 'GeneratorPreview',
};
</script>

<template>
    <div class="generator-preview">
        <svg></svg>
    </div>
</template>

<style scoped>
.generator-preview {
    position: relative;
    width: 100%;
}

.generator-preview::before {
    content: '';
    display: block;
    padding-bottom: 100%;
}

.generator-preview svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--grey-000);
}
</style>
