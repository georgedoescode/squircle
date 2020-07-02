<script>
    export default {
        name: 'TheGenerator',
    };
</script>

<template>
    <div class="generator">
        <div class="generator__preview">
            <svg></svg>
        </div>
        <div class="generator__control-panel"></div>
    </div>
</template>

<style scoped>
    .generator {
        display: flex;
        max-width: var(--spacing-15);
        margin: 0 auto;
        padding: var(--spacing-4);
        background: #fff;
        border-radius: 16px;
    }

    .generator__preview {
        position: relative;
        width: 50%;
        flex-shrink: 0;
        margin-right: var(--spacing-4);
    }

    .generator__preview::before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    .generator__preview svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--grey-000);
    }

    .generator__control-panel {
        flex-grow: 1;
        min-height: 100%;
    }
</style>
