<script>
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';
import GeneratorExportOptions from './GeneratorExportOptions.vue';

export default {
    name: 'GeneratorControls',
    components: {
        VSwatches,
        GeneratorExportOptions,
    },
    props: {
        initialFill: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            fill: this.initialFill,
        };
    },
    watch: {
        fill(newVal) {
            this.$emit('controls-changed', {
                id: 'fill',
                value: newVal,
            });
        },
    },
    methods: {
        handleControlChange(e) {
            this.$emit('controls-changed', {
                id: e.target.id,
                value: e.target.value,
            });
        },
        handleDetailChange(e) {
            const { id } = e.target;

            for (const propertyIndex in this.detailToggleState) {
                const state = this.detailToggleState[~~propertyIndex];

                if (state.id === id) {
                    state.checked = true;

                    this.$emit('controls-changed', {
                        id: 'detail',
                        value: state.value,
                    });
                } else {
                    state.checked = false;
                }
            }
        },
    },
};
</script>

<template>
    <div class="generator-controls">
        <div class="generator-controls__inputs">
            <label for="scale" class="generator-controls__label">
                Scale
            </label>
            <BaseRangeInput
                name="scale"
                class="generator-controls__slider"
                :min="0"
                :max="200"
                :value="100"
                :step="1"
                @change="handleControlChange"
            />
            <label for="curvature" class="generator-controls__label">
                Curvature
            </label>
            <BaseRangeInput
                name="curvature"
                class="generator-controls__slider"
                :min="0"
                :max="1"
                :value="0.5"
                :step="0.01"
                @change="handleControlChange"
            />
            <label for="colorHex" class="generator-controls__label">
                Fill
            </label>
            <div class="generator-controls__swatch">
                <input
                    id="colorHex"
                    v-model="fill"
                    class="generator-conrols__swatch-text"
                    type="text"
                    name="colorHex"
                />
                <VSwatches
                    v-model="fill"
                    :swatches="[
                        '#199473',
                        '#65D6AD',
                        '#C6F7E2',
                        '#EFFCF6',
                        '#035388',
                        '#1992D4',
                        '#5ED0FA',
                        '#E3F8FF',
                        '#8A041A',
                        '#E12D39',
                        '#F86A6A',
                        '#FFE3E3',
                        '#DE911D',
                        '#F0B429',
                        '#FADB5F',
                        '#FFF3C4',
                    ]"
                    :trigger-style="{
                        width: '64px',
                        height: '48px',
                        borderRadius: '0 12px 12px 0',
                    }"
                />
            </div>
            <hr />
            <label
                for=""
                class="generator-controls__label generator-controls__label--export"
                >Export</label
            >
            <GeneratorExportOptions />
        </div>
    </div>
</template>

<style scoped>
.generator-controls {
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: var(--spacing-13);
    width: 100%;
    padding-right: var(--spacing-1);
}

.generator-controls__inputs {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: var(--spacing-6) var(--spacing-6) var(--spacing-6) max-content max-content;
    grid-row-gap: var(--spacing-5);
    justify-content: center;
    width: 100%;
}

.generator-controls__label {
    grid-column: 1;
    align-self: center;
    margin-right: var(--spacing-6);
    font-size: var(--font-size-4);
    font-weight: 700;
}

.generator-controls__slider {
    grid-column: 2;
}

.generator-controls__color-picker {
    grid-column: -1 / 1;
}

.generator-controls__swatch {
    grid-column: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--spacing-6);
    background: var(--grey-000);
    border-radius: 12px;
}

.generator-conrols__swatch-text {
    position: relative;
    width: 100%;
    min-width: 0;
    text-transform: uppercase;
    height: 100%;
    padding-left: var(--spacing-3);
    background: transparent;
    border: 2px solid var(--grey-000);
    border-radius: 12px 0 0 12px;
    box-shadow: none;
    transition: border 125ms ease-in-out;
}

.generator-controls__swatch:hover .generator-conrols__swatch-text {
    border: 2px solid var(--grey-100);
    border-right: 0;
}

.generator-controls__detail {
    align-self: center;
}

.generator-export-controls {
    grid-column: 2;
}

hr {
    grid-column: -1 / 1;
    border: 0;
    height: 2px;
    background: var(--grey-000);
    margin: var(--spacing-1) 0;
}

@media only screen and (max-width: 56rem) {
    .generator-controls {
        padding: 0 var(--spacing-4);
        padding-bottom: var(--spacing-3);
    }

    .generator-controls__inputs {
        grid-row-gap: var(--spacing-5);
        grid-auto-rows: minmax(var(--spacing-5), max-content);
    }

    .generator-controls__label {
        font-size: var(--font-size-3);
        margin-right: var(--spacing-5);
    }

    .generator-export-controls {
        grid-column: -1 / 1;
    }

    .generator-controls__label--export {
        display: none;
    }
}
</style>

<style>
.vue-swatches__trigger__wrapper {
    display: block;
    transform-origin: 100% 100%;
    transition: transform 125ms ease-in-out;
}

.generator-controls__swatch:hover .vue-swatches__trigger__wrapper {
    transform: scaleX(1.125);
}
</style>
