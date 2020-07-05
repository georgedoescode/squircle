<script>
export default {
    name: 'TheWaveBackground',
};
</script>

<template>
    <div class="wave-background">
        <svg
            class="wave-background__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
        >
            <path
                fill-opacity="1"
                d="M0,64L80,96C160,128,320,192,480,181.3C640,171,800,85,960,69.3C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
        </svg>
        <div class="wave-background__fill"></div>
    </div>
</template>

<style scoped>
.wave-background {
    display: flex;
    flex-direction: column;
}

.wave-background__svg {
    margin-top: var(--spacing-7);
    fill: #fff;
}

.wave-background__fill {
    flex-grow: 1;
    background: #fff;
}
</style>
