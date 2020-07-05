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
        <h1 class="header__title">Squircley!</h1>
        <SocialSharing class="header__social" />
    </header>
</template>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: auto;
    align-items: center;
    padding: var(--spacing-5);
    margin-bottom: var(--spacing-7);
}

.header__logo {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    width: var(--spacing-6);
    height: var(--spacing-6);
    background: var(--grey-900);
    border-radius: 16px;
}

.header__title {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    font-size: var(--font-size-7);
    font-weight: 900;
    text-align: center;
}

.header__social {
    grid-column: 3;
    grid-row: 1;
    justify-content: flex-end;
}

@media only screen and (max-width: 48rem) {
    .header {
        padding: var(--spacing-5) var(--spacing-4);
        margin-bottom: var(--spacing-3);
    }

    .header__logo {
        width: var(--spacing-5);
        height: var(--spacing-5);
        border-radius: 12px;
    }

    .header__title {
        font-size: var(--font-size-5);
    }
}
</style>
