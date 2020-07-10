<script>
import DownloadIcon from '@/assets/img/download-cloud.svg?inline';
import ClipBoardIcon from '@/assets/img/clipboard.svg?inline';

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
            this.$toasted.show('Squircle SVG copied to clipboard!', {
                position: 'bottom-center',
                duration: 2500,
            });
        },
    },
};
</script>

<template>
    <div class="generator-export-controls">
        <button
            aria-label="download squircle SVG"
            class="generator-export-controls__btn"
            @click="downloadSVG"
        >
            <span>
                Save
            </span>
            <DownloadIcon />
        </button>
        <button
            aria-label="copy squircle SVG to clipboard"
            class="generator-export-controls__btn"
            @click="copySVGToClipBoard"
        >
            <span>
                Copy
            </span>
            <ClipBoardIcon />
        </button>
    </div>
</template>

<style scoped>
.generator-export-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.generator-export-controls__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 var(--spacing-3);
    width: 50%;
    height: var(--spacing-6);
    margin-left: var(--spacing-4);
    cursor: pointer;
    background: #fff;
    border-radius: 12px;
    font-weight: 700;
    border: 2px solid #4d3df7;
    color: #4d3df7;
    transition: transform 125ms ease-in-out;
}

.generator-export-controls__btn span {
    transition: transform 125ms ease-in-out;
}

.generator-export-controls__btn svg {
    width: 24px;
    height: 24px;
    stroke-width: 1.5px;
    margin-left: var(--spacing-2);
    stroke: #4d3df7;
    transition: stroke 125ms ease-in-out, transform 125ms ease-in-out;
}

.generator-export-controls__btn:hover svg {
    transform: scale(1.125);
}

.generator-export-controls__btn:active svg {
    transform: scale(0.875);
}

.generator-export-controls__btn:first-child {
    margin-left: 0;
    background: #4d3df7;
    color: #e6e6ff;
    border: 0;
}

.generator-export-controls__btn:first-child svg {
    stroke: #e6e6ff;
}
</style>
