<script>
    import TheHeader from './components/TheHeader.vue';
    import TheGenerator from './components/TheGenerator.vue';

    export default {
        name: 'App',
        components: {
            TheHeader,
            TheGenerator,
        },
    };
</script>

<template>
    <div>
        <TheHeader />
        <TheGenerator />
    </div>
</template>
