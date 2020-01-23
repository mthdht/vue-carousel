<template>
    <div class="w-full relative" v-show="visible">
        <slot></slot>
    </div>
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
                return this.index == this.$parent.index
            }
        }
    }
</script>

<style scoped>

</style>