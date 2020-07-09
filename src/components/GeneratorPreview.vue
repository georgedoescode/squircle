<script>
export default {
    name: 'GeneratorPreview',
    props: {
        path: {
            type: String,
            required: true,
        },
        fill: {
            type: String,
            required: true,
        },
        scale: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <div class="generator-preview">
        <svg
            id="squircleSVG"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            :fill="fill"
        >
            <path
                :d="path"
                :transform="`translate(${(200 - scale) / 2} ${
                    (200 - scale) / 2
                })`"
            />
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
}

@media only screen and (max-width: 56rem) {
    .generator-preview {
        max-width: 280px;
        margin-bottom: var(--spacing-3);
    }
}
</style>
