<script>
export default {
    name: 'BaseRangeInput',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <input :id="name" type="range" :name="name" />
</template>

<style scoped>
input {
    min-width: 0;
    max-width: 100%;
    cursor: pointer;
}
</style>
