<template>
    <transition :name="transition">
    <div class="slide" v-show="visible">
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
.slide {
    width: 100%;
    position: relative;
}

.slide-left-enter-active {
    animation: slideLeftEnter 1s ease;
}

.slide-left-leave-active {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: slideLeftLeave 1s ease;
}

.slide-right-enter-active {
    animation: slideRightEnter 1s ease;
}

.slide-right-leave-active {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: slideRightLeave 1s ease;
}


@keyframes slideLeftEnter {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
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

@keyframes slideRightEnter {
    from {
        transform: translateX(100%);
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
</style>