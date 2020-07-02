<script>
    import SocialSharing from './SocialSharing.vue';

    export default {
        name: 'TheHeader',
        components: {
            SocialSharing,
        },
    };
</script>

<template>
    <header class="header">
        <div class="header__logo"></div>
        <h1 class="header__title">Squircle Maker</h1>
        <div class="header__social">
            <SocialSharing />
        </div>
    </header>
</template>

<style scoped>
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        padding: var(--spacing-4);
    }

    .header__logo {
        grid-column: 1;
        justify-self: start;
        width: var(--spacing-6);
        height: var(--spacing-6);
        background: var(--grey-900);
        border-radius: 16px;
    }

    .header__title {
        grid-column: 2;
        justify-self: center;
        font-size: var(--font-size-7);
        font-weight: 900;
        text-align: center;
    }

    .header__social {
        grid-column: 3;
        justify-self: end;
    }
</style>
