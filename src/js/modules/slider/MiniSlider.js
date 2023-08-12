import Slider from './Slider'

export default class MiniSlider extends Slider {
    updateSlider() {
        this.setActiveClass()
    }

    nextSlide() {
        this.slider.append(this.slides[0])
        super.nextSlide()
    }

    prevSlide() {
        this.slider.prepend(this.slides[this.numberOfSlides - 1])
        super.prevSlide()
    }

    setActiveClass() {
        ;[...this.slides].forEach((slide, i) => {
            i === 0 ? slide.classList.add(this.activeClass) : slide.classList.remove(this.activeClass)
        })
    }

    init() {
        super.init()

        this.slider.style.overflow = 'hidden'
        this.slider.style.display = 'flex'
        ;[...this.slides].forEach(slide => {
            slide.style.flexShrink = '0'
        })
    }
}