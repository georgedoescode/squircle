<script>
import Squircle1 from '@/assets/img/squircle-01.svg?inline';
import Squircle2 from '@/assets/img/squircle-02.svg?inline';
import Squircle3 from '@/assets/img/squircle-03.svg?inline';

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
    position: absolute;
    pointer-events: none;
}

.squircle-explosion__squircle {
    position: absolute;
    width: 64px;
    height: 64px;
    fill: #7069fa;
    opacity: 0.75;
}

.squircle-explosion__squircle:nth-of-type(1) {
    top: var(--spacing-10);
    left: var(--spacing-6);
    transform: rotate(32deg);
}

.squircle-explosion__squircle:nth-of-type(2) {
    top: var(--spacing-11);
    right: var(--spacing-5);
    transform: rotate(32deg);
    fill: #f86a6a;
}

.squircle-explosion__squircle:nth-of-type(3) {
    width: 48px;
    height: 48px;
    top: var(--spacing-13);
    left: var(--spacing-9);
    transform: rotate(54deg);
    fill: #fadb5f;
}

.squircle-explosion__squircle:nth-of-type(4) {
    width: 32px;
    height: 32px;
    top: var(--spacing-13);
    right: var(--spacing-8);
    transform: rotate(128deg);
    fill: #fadb5f;
}

.squircle-explosion__squircle:nth-of-type(5) {
    width: 24px;
    height: 24px;
    top: var(--spacing-8);
    right: var(--spacing-12);
    transform: rotate(128deg);
    fill: #7069fa;
}

@media only screen and (max-width: 72rem) {
    .squircle-explosion {
        display: none;
    }
}
</style>
