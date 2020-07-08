<script>
export default {
    name: 'BaseThreeBtnToggle',
    props: {
        toggleState: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template>
    <div class="base-three-btn-toggle">
        <div
            v-for="option in toggleState"
            :key="option.id"
            class="base-three-btn-toggle__option"
        >
            <input
                :id="option.id"
                type="checkbox"
                :name="option.id"
                :checked="option.checked ? 'checked' : ''"
                @click="$emit('change', $event)"
            />
            <label :for="option.id">{{ option.label }}</label>
        </div>
    </div>
</template>

<style scoped>
.base-three-btn-toggle {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    height: var(--spacing-5);
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    overflow: hidden;
}

.base-three-btn-toggle__option {
    width: 100%;
    height: 100%;
}

.base-three-btn-toggle label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.base-three-btn-toggle > div:nth-of-type(2) {
    border-left: 1px solid var(--grey-200);
    border-right: 1px solid var(--grey-200);
}

.base-three-btn-toggle input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
}

.base-three-btn-toggle input:checked + label {
    background: var(--grey-000);
}
</style>
