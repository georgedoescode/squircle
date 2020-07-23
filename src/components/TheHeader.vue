<script>
import SocialSharing from './SocialSharing.vue?inline';
import SquircleyLogo from '@/assets/img/squircley-logo.svg?inline';

export default {
    name: 'TheHeader',
    components: {
        SocialSharing,
        SquircleyLogo,
    },
};
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <SquircleyLogo />
        </div>
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
}

.header__logo svg {
    width: 100%;
    height: 100%;
    fill: #4d3df7;
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

@media only screen and (max-width: 64rem) {
    .header {
        padding: var(--spacing-4);
        margin-bottom: var(--spacing-4);
    }

    .header__logo {
        width: var(--spacing-5);
        height: var(--spacing-5);
        border-radius: 12px;
    }

    .header__title {
        font-size: var(--font-size-6);
    }
}

@media only screen and (max-width: 32rem) {
    .header__social {
        display: none;
    }

    .header__title {
        grid-column: 1;
        justify-self: start;
        font-size: var(--font-size-5);
    }

    .header__logo {
        grid-column: 3;
        justify-self: end;
    }
}
</style>
