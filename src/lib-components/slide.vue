<template>
    <transition :name="transition">
    <div class="w-full relative" v-show="visible">
        <slot></slot>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "Slide",
        data: function () {
            return {
                index: 0,
            }
        },
        computed: {
            visible() {
                return this.index == this.$parent.currentSlide
            },
            transition () {
                return 'slide-' + this.$parent.direction
            }
        }
    }
</script>

<style scoped>
.slide-right-enter-active {
    animation: slideRightEnter 1s ease
}

.slide-left-enter-active {
    animation: slideLeftEnter 1s ease
}

.slide-right-leave-active {
    animation: slideRightLeave 1s ease;
    @apply absolute inset-0;
}

.slide-left-leave-active {
    animation: slideLeftLeave 1s ease;
    @apply absolute inset-0;
}

@keyframes slideRightEnter {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideLeftEnter {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideRightLeave {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

@keyframes slideLeftLeave {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}
</style>