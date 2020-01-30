<template>
    <div class="carousel" @mouseenter="stopSlide" @mouseleave="startSlide">
        <slot></slot>
        <div class="navigation" :style="controlsStyle" v-if="arrows">
            <button @click="prevSlide" :class="color"><font-awesome-icon :icon="leftIcon" size="2x"/></button>
            <button @click="nextSlide" :class="color"><font-awesome-icon :icon="rightIcon" size="2x"/></button>
        </div>
        <div class="navigation-bullets" style="bottom:10%" v-if="bullets">
            <button @click="showSlide(n)" v-for="n in slides.length" :key="n" class="bullet" :class="color"><font-awesome-icon icon="circle" :class="{ active: currentSlide == n-1 }"/></button>
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
            icon: {
                type: String,
                default: "arrow"
            },
            color: {
                type: String,
                default: "black"
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            duration: {
                type: Number,
                default: 3500
            },
            arrows: {
                type: Boolean,
                default: true
            },
            bullets: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                currentSlide: 0,
                slides: 0,
                controlsStyle: {
                    top: '50%',
                    transform: 'translateY(-50%)'
                },
                direction: null,
                interval: null,
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
            if (this.autoplay) {
                this.interval = setInterval(() => {
                    this.nextSlide()
                }, this.duration)
            }
        },
        computed: {
            leftIcon() {
                return this.icon + '-left'
            },
            rightIcon() {
                return this.icon + '-right'
            }
        },
        methods: {
            nextSlide() {
                this.direction = 'right'
                this.currentSlide == this.slides.length -1 ? this.currentSlide = 0 : this.currentSlide++
            },
            prevSlide() {
                this.direction = 'left'
                this.currentSlide === 0 ? this.currentSlide = this.slides.length -1 : this.currentSlide--
            },
            showSlide(n) {
                this.currentSlide > n - 1 ? this.direction = 'left' : this.direction = 'right'
                this.currentSlide = n - 1
            },
            stopSlide() {
                if (this.autoplay) {
                    this.interval = clearInterval(this.interval)
                }
            },
            startSlide() {
                if (this.autoplay) {
                    this.interval = setInterval(() => {
                        this.nextSlide()
                    }, this.duration)
                }
            }
        },
        components: {
            FontAwesomeIcon,
        }

    }
</script>

<style scoped>

* {
    box-sizing: border-box;
}
.active {
    color: #4A5568;
}

.carousel {
    width: 100%;
    position: relative;
    overflow-x: hidden;
}

.navigation, .navigation-bullets {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 0 15px;
}

.navigation-bullets {
    justify-content: center;
}

.bullet {
}

.black {
    color: #000;
}

.white {
    color: #FFF;
}

.red {
    color: #F56565;
}

.orange {
    color: #ED8936;
}

.yellow {
    color: #ECC94B;
}

.green {
    color: #48BB78;
}

.teal {
    color: #38B2AC;
}

.indigo {
    color: #667EEA;
}

.purple {
    color: #9F7AEA;
}

.pink {
    color: #ED64A6;
}

.blue {
    color: #4299E1;
}

button {
    background: transparent;
    border: 0;
}
</style>