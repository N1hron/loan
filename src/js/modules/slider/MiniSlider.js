import Slider from './slider'

export default class MiniSlider extends Slider {
    updateSlider() {
        this.setActiveClass()
    }

    nextSlide() {
        this.slides[this.numberOfSlides - 1].after(this.slides[0])
        super.nextSlide()
    }

    prevSlide() {
        this.slides[0].before(this.slides[this.numberOfSlides - 1])
        super.prevSlide()
    }

    setActiveClass() {
        ;[...this.slides].forEach((slide, i) => {
            i === 0 ? slide.classList.add(this.activeClass) : slide.classList.remove(this.activeClass)
        })
    }
}