<script>
import Squircle1 from '@/assets/img/squircle-01.svg';
import Squircle2 from '@/assets/img/squircle-02.svg';
import Squircle3 from '@/assets/img/squircle-03.svg';

export default {
    name: 'TheSquircleExplosion',
    components: {
        Squircle1,
        Squircle2,
        Squircle3,
    },
};
</script>

<template>
    <div class="squircle-explosion">
        <Squircle1 class="squircle-explosion__squircle" />
        <Squircle2 class="squircle-explosion__squircle" />
        <Squircle3 class="squircle-explosion__squircle" />
        <Squircle1 class="squircle-explosion__squircle" />
        <Squircle2 class="squircle-explosion__squircle" />
    </div>
</template>

<style>
.squircle-explosion {
    position: relative;
}

.squircle-explosion__squircle {
    position: absolute;
    width: 64px;
    height: 64px;
    fill: var(--grey-100);
}

.squircle-explosion__squircle:nth-of-type(1) {
    top: var(--spacing-10);
    left: var(--spacing-7);
    transform: rotate(32deg);
}

.squircle-explosion__squircle:nth-of-type(2) {
    top: var(--spacing-11);
    right: var(--spacing-5);
    transform: rotate(32deg);
}

.squircle-explosion__squircle:nth-of-type(3) {
    width: 48px;
    height: 48px;
    top: var(--spacing-13);
    left: var(--spacing-9);
    transform: rotate(54deg);
}

.squircle-explosion__squircle:nth-of-type(4) {
    width: 32px;
    height: 32px;
    top: var(--spacing-13);
    right: var(--spacing-8);
    transform: rotate(128deg);
}

.squircle-explosion__squircle:nth-of-type(5) {
    width: 24px;
    height: 24px;
    top: var(--spacing-9);
    right: var(--spacing-12);
    transform: rotate(128deg);
}

@media only screen and (max-width: 56rem) {
    .squircle-explosion {
        display: none;
    }
}
</style>
