<script>
export default {
    name: 'GeneratorPreview',
    props: {
        points: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template>
    <div class="generator-preview">
        <svg viewBox="0 0 200 200" preserveAspectRatio>
            <polygon :points="points" transform="translate(100 100)" />
        </svg>
    </div>
</template>

<style scoped>
.generator-preview {
    position: relative;
    width: 100%;
    justify-self: center;
    background: #fff;
    border-radius: 24px;
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
    fill: var(--grey-900);
}

@media only screen and (max-width: 48rem) {
    .generator-preview {
        max-width: 280px;
        margin-bottom: var(--spacing-3);
    }
}
</style>
