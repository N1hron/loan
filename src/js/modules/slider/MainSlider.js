import Slider from './Slider'

export default class MainSlider extends Slider {
    constructor({popupSelector, ...rest}) {
        super(rest)
        this.popup = document.querySelector(popupSelector)
    }

    updateSlider() {
        this.slider.style.top = `-${(this.currentSlide - 1)*100}vh`

        if (this.popup) {
            if (this.currentSlide === 3) this.showPopupAfter(3000)
            else clearTimeout(this.timeoutId)
        }
    }

    showPopupAfter(time) {
        if (this.popup.style.transform !== 'translateY(0px)') {
            this.timeoutId = setTimeout(() => {
                this.popup.style.transform = 'translateY(0)'
            }, time)
        }
    }

    init() {
        super.init()

        this.slider.style.position = 'relative'
        this.slider.style.transition = 'top 0.5s'
        this.slider.style.top = `-0vh`

        if (this.popup) {
            this.popup.style.transform = 'translateY(100%)'
            this.popup.style.transition = 'transform 0.5s'
        }
    }
}