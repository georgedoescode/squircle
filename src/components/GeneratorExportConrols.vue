<script>
    import CodeIcon from '@/assets/img/code.svg';
    import DownloadIcon from '@/assets/img/download.svg';

    export default {
        name: 'GeneratorExportControls',
        components: {
            CodeIcon,
            DownloadIcon,
        },
    };
</script>

<template>
    <div class="generator-export-controls">
        <button class="generator-export-controls__btn">
            <DownloadIcon />
        </button>
        <button class="generator-export-controls__btn">
            <CodeIcon />
        </button>
    </div>
</template>

<style scoped>
    .generator-export-controls {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .generator-export-controls__btn {
        margin-left: var(--spacing-5);
        padding: 0;
        border: 0;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        transition: stroke 125ms ease-in-out, transform 125ms ease-in-out;
    }

    .generator-export-controls__btn svg {
        stroke: var(--grey-900);
    }

    .generator-export-controls__btn:hover {
        transform: scale(1.125);
    }

    .generator-export-controls__btn:active {
        transform: scale(0.875);
    }

    .generator-export-controls__btn:active svg {
        stroke: var(--grey-500);
    }

    .generator-export-controls__btn:first-child {
        margin-left: 0;
    }
</style>
