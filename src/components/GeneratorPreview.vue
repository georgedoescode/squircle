<script>
export default {
    name: 'GeneratorPreview',
};
</script>

<template>
    <div class="generator-preview">
        <svg>
            <rect
                x="25%"
                y="25%"
                width="50%"
                height="50%"
                fill="#f5f7fa"
            ></rect>
        </svg>
    </div>
</template>

<style scoped>
.generator-preview {
    position: relative;
    width: 100%;
}

.generator-preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border: 1px dashed var(--grey-100);
    border-radius: 24px;
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
}
</style>
