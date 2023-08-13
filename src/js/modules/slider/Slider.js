export default class Slider {
    constructor({sliderSelector, slideClassName, nextBtnSelector, prevBtnSelector, resetBtnSelector, activeClass}) {
        this.slider = document.querySelector(sliderSelector)
        this.slides = slideClassName ? this.slider.getElementsByClassName(slideClassName) : this.slider.children
        this.nextBtns = document.querySelectorAll(nextBtnSelector)
        this.prevBtns = document.querySelectorAll(prevBtnSelector)
        this.resetBtns = document.querySelectorAll(resetBtnSelector)
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