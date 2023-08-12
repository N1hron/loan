export default class Slider {
    constructor({sliderSelector, slideSelector, nextBtnSelector, prevBtnSelector, resetBtnSelector, activeClass}) {
        this.slider = document.querySelector(sliderSelector)
        this.slides = slideSelector ? this.slider.querySelectorAll(slideSelector) : this.slider.children
        this.nextBtns = this.slider.querySelectorAll(nextBtnSelector)
        this.prevBtns = this.slider.querySelectorAll(prevBtnSelector)
        this.resetBtns = this.slider.querySelectorAll(resetBtnSelector)
        this.activeClass = activeClass
        this.numberOfSlides = this.slides.length
        this.__currentSlide = 1
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
        console.log(this.currentSlide)
        if (this.updateSlider) this.updateSlider()
    }

    bindBtns() {
        this.nextBtns.forEach(btn => btn.addEventListener('click', () => this.nextSlide()))
        this.prevBtns.forEach(btn => btn.addEventListener('click', () => this.prevSlide()))
        this.resetBtns.forEach(btn => btn.addEventListener('click', () => this.resetSlider()))
    }

    init() {
        this.bindBtns()
        console.log(this)
    }
}