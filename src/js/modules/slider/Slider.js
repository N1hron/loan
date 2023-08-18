export default class Slider {
    constructor({sliderSelector, slideClassName, nextBtnSelector, prevBtnSelector, resetBtnSelector, activeClass, auto = false, interval = 5000}) {
        this.slider = document.querySelector(sliderSelector)
        this.slides = slideClassName ? this.slider.getElementsByClassName(slideClassName) : this.slider.children
        this.nextBtns = document.querySelectorAll(nextBtnSelector)
        this.prevBtns = document.querySelectorAll(prevBtnSelector)
        this.resetBtns = document.querySelectorAll(resetBtnSelector)
        this.activeClass = activeClass
        this.numberOfSlides = this.slides.length
        this.__currentSlide = 1
        this.auto = auto
        this.interval = interval
        this.isVisible = false
        this.intervalId = null
    }

    set currentSlide(value) {
        if (value > this.currentSlide) this.__currentSlide = value > this.numberOfSlides ? 1 : value
        else this.__currentSlide = value < 1 ? this.numberOfSlides : value
    }

    get currentSlide() {
        return this.__currentSlide
    }

    nextSlide() {
        this.currentSlide++
        if (this.updateSlider) this.updateSlider()
    }

    prevSlide() {
        this.currentSlide = --this.currentSlide < 1 ? this.numberOfSlides : this.currentSlide--
        if (this.updateSlider) this.updateSlider()
    }

    resetSlider() {
        this.currentSlide = 1
        if (this.updateSlider) this.updateSlider()
    }

    setupAutoSlideshow() {
        if (this.auto && this.isVisible && !this.intervalId) this.intervalId = setInterval(() => this.nextSlide(), this.interval)
    }

    stopAutoSlideshow() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetAutoSlideshow() {
        this.stopAutoSlideshow()
        this.setupAutoSlideshow()
    }

    setIsVisible() {
        const rect = this.slider.getBoundingClientRect(),
              clientHeight = document.documentElement.clientHeight,
              sliderHeight = this.slider.clientHeight

        this.isVisible = (rect.top < clientHeight && rect.top > -sliderHeight) ? true : false

        this.stopAutoSlideshow()
        this.setupAutoSlideshow()
    }   

    setUpObserver() {
        const target = document.querySelector('.page'),
              config = { attributes: true, attributeOldValue: true, attributeFilter: ['style'] }

        new MutationObserver(mutations => {
            for (let mutation of mutations) {
                const oldTop = mutation.oldValue ? 
                               mutation.oldValue.split(';').find(element => element.includes('top:'))
                               : null

                const oldTopValue = oldTop ? oldTop.trim().split(' ')[1] : null,
                      currentTopValue = mutation.target.style.top

                if (oldTopValue && (oldTopValue !== currentTopValue)) {
                    setTimeout(() => this.setIsVisible(), getComputedStyle(target).transitionDuration.replace('s', '') * 1000)
                }
            }
        }).observe(target, config)
    }

    bindBtns() {
        this.nextBtns.forEach(btn => btn.addEventListener('click', () => {
            this.nextSlide()
            this.resetAutoSlideshow()
        }))

        this.prevBtns.forEach(btn => btn.addEventListener('click', () => {
            this.prevSlide()
            this.resetAutoSlideshow()
        }))

        this.resetBtns.forEach(btn => btn.addEventListener('click', () => {
            this.resetSlider()
            this.resetAutoSlideshow()
        }))
    }

    init() {
        this.setIsVisible()
        this.bindBtns()
        this.setupAutoSlideshow()
        this.setUpObserver()
    }
}