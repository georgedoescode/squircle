<script>
import DownloadIcon from '@/assets/img/download-cloud.svg';
import ClipBoardIcon from '@/assets/img/clipboard.svg';

import { saveAs } from 'file-saver';
import copy from 'copy-to-clipboard';

export default {
    name: 'GeneratorExportOptions',
    components: {
        DownloadIcon,
        ClipBoardIcon,
    },
    methods: {
        downloadSVG() {
            const content = document.querySelector('#squircleSVG').outerHTML;
            const blob = new Blob([content], {
                type: 'text/plain;charset=utf-8',
            });

            saveAs(blob, 'squircle.svg');
        },
        copySVGToClipBoard() {
            const content = document.querySelector('#squircleSVG').outerHTML;
            copy(content);
        },
    },
};
</script>

<template>
    <div class="generator-export-controls">
        <button class="generator-export-controls__btn" @click="downloadSVG">
            <DownloadIcon />
        </button>
        <button
            class="generator-export-controls__btn"
            @click="copySVGToClipBoard"
        >
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
