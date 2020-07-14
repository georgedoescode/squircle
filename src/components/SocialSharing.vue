<script>
import RedditLogo from '@/assets/img/social-icons/reddit-alien.svg?inline';
import TwitterLogo from '@/assets/img/social-icons/twitter.svg?inline';

export default {
    name: 'SocialSharing',
    components: {
        RedditLogo,
        TwitterLogo,
    },
    data() {
        return {
            sharingOptions: {
                url: 'https://www.squircley.app',
                title: 'Squircle Maker | Squircley',
            },
        };
    },
};
</script>

<template>
    <div class="social-sharing">
        <ShareNetwork
            class="social-sharing__icon"
            network="reddit"
            v-bind="sharingOptions"
        >
            <RedditLogo />
        </ShareNetwork>
        <ShareNetwork
            class="social-sharing__icon"
            network="twitter"
            v-bind="sharingOptions"
            hashtags="squircle,design,shapes,icons,logos"
        >
            <TwitterLogo />
        </ShareNetwork>
    </div>
</template>

<style scoped>
.social-sharing {
    display: flex;
}

.social-sharing__icon {
    display: block;
    width: var(--spacing-4);
    height: var(--spacing-4);
    margin-left: var(--spacing-5);
    cursor: pointer;
    transition: transform 125ms ease-in-out;
}

.social-sharing__icon svg {
    width: 100%;
    height: 100%;
    fill: #0c008c;
    transition: fill 125ms ease-in-out, transform 125ms ease-in-out;
}

.social-sharing__icon:hover svg {
    transform: scale(1.125);
}

.social-sharing__icon:active svg {
    fill: var(--grey-500);
}

.social-sharing__icon:active {
    transform: scale(0.875);
}

@media only screen and (max-width: 56rem) {
    .social-sharing__icon {
        width: var(--spacing-3);
        height: var(--spacing-3);
        margin-left: var(--spacing-4);
    }
}
</style>
