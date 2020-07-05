<script>
import DownloadIcon from '@/assets/img/download-cloud.svg';
import ClipBoardIcon from '@/assets/img/clipboard.svg';

export default {
    name: 'GeneratorExportOptions',
    components: {
        DownloadIcon,
        ClipBoardIcon,
    },
};
</script>

<template>
    <div class="generator-export-controls">
        <button class="generator-export-controls__btn">
            <DownloadIcon />
        </button>
        <button class="generator-export-controls__btn">
            <ClipBoardIcon />
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
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--spacing-6);
    height: var(--spacing-6);
    margin-left: var(--spacing-4);
    padding: 0;
    border: 0;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    background: #fff;

    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.075); */
    transition: stroke 125ms ease-in-out, transform 125ms ease-in-out;
}

.generator-export-controls__btn svg {
    width: 24px;
    height: 24px;
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
