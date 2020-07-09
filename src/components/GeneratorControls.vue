<script>
import VSwatches from 'vue-swatches';
import 'vue-swatches/dist/vue-swatches.css';

export default {
    name: 'GeneratorControls',
    components: {
        VSwatches,
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
            detailToggleState: [
                {
                    id: 'normal',
                    label: 'Normal',
                    checked: true,
                    value: 0.1,
                },
                {
                    id: 'high',
                    label: 'High',
                    checked: false,
                    value: 0.01,
                },
            ],
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
                :max="100"
                :value="50"
                :step="1"
                @change="handleControlChange"
            />
            <label for="curvature" class="generator-controls__label">
                Curvature
            </label>
            <BaseRangeInput
                name="curvature"
                class="generator-controls__slider"
                :min="1"
                :max="15"
                :value="8"
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
                    :trigger-style="{
                        width: '64px',
                        height: '48px',
                        borderRadius: '0 12px 12px 0',
                    }"
                />
            </div>
            <label for="quality" class="generator-controls__label">
                Smoothing
            </label>

            <BaseTwoBtnToggle
                :toggle-state="detailToggleState"
                class="generator-controls__detail"
                @change="handleDetailChange"
            />
        </div>
    </div>
</template>

<style scoped>
.generator-controls {
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--spacing-13);
    width: 100%;
}

.generator-controls__inputs {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: minmax(var(--spacing-6), max-content);
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
    padding-left: var(--spacing-3);
    height: var(--spacing-6);
    background: var(--grey-000);
    border-radius: 12px;
}

.generator-conrols__swatch-text {
    border: 0;
    background: transparent;
    outline: none;
    width: 100%;
    text-transform: uppercase;
}

.generator-controls__detail {
    align-self: center;
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
}
</style>
