<template>
    <div class="w-full relative">
        <slot></slot>
        <div class="navigation flex justify-between absolute fa-2x w-full px-8" :class="controlsColor" :style="controlsStyle">
            <button @click="prevSlide"><font-awesome-icon :icon="leftIcon" /></button>
            <button @click="nextSlide"><font-awesome-icon :icon="rightIcon" /></button>
        </div>
        <div class="navigation flex justify-center absolute w-full px-8" :class="controlsColor" :style="controlsBulletStyle">
            <button @click="showSlide(n)" v-for="n in slidesLength" :key="n" class="mr-2"><font-awesome-icon icon="circle" /></button>
        </div>
    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCircle, faArrowCircleLeft, faArrowCircleRight, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight, faChevronCircleLeft, faChevronCircleRight, faCaretLeft, faCaretRight, faCaretSquareLeft, faCaretSquareRight, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faCircle, faArrowCircleLeft, faArrowCircleRight, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight, faChevronCircleLeft, faChevronCircleRight, faCaretLeft, faCaretRight, faCaretSquareLeft, faCaretSquareRight, faAngleRight, faAngleLeft)
    export default {
        name: "Carousel",
        props: {
            icon: String,
            color: String
        },
        data: function () {
            return {
                index: 0,
                slides: 0,
                controlsStyle: {
                    top: '50%',
                    transform: 'translateY(-50%)'
                },
                controlsBulletStyle: {
                    bottom: '10%',
                }
            }
        },
        mounted: function () {
            this.slides = this.$children,
            this.slides.forEach((slide, index) => {
                slide.index = index
            });
            window.addEventListener('keyup', (event) => {
                event.keyCode === 37 ? this.prevSlide() : event.keyCode === 39 ? this.nextSlide() : null 
            })
        },
        computed: {
            leftIcon() {
                return this.icon + '-left'
            },
            rightIcon() {
                return this.icon + '-right'
            },
            controlsColor() {
                return "text-" + this.color + ((this.color !== "white" && this.color !== "black") ? "-500" : "")
            },
            slidesLength() {
                return this.slides.length
            }
        },
        methods: {
            nextSlide() {
                this.index == this.slides.length -1 ? this.index = 0 : this.index++
            },
            prevSlide() {
                this.index === 0 ? this.index = this.slides.length -1 : this.index--
            },
            showSlide(n) {
                this.index = n - 1
            }
        },
        components: {
            FontAwesomeIcon,
        }

    }
</script>