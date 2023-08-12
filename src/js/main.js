import MainSlider from './modules/slider/MainSlider'
import MiniSlider from './modules/slider/MiniSlider'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const mainSlider = new MainSlider({
        sliderSelector: '.page', 
        nextBtnSelector: '.next', 
        resetBtnSelector: '.sidecontrol > a', 
        popupSelector: '.hanson'
    })
    mainSlider.init()

    const showupSlider = new MiniSlider({
        sliderSelector: '.showup__content-slider',
        nextBtnSelector: '.showup__next',
        prevBtnSelector: '.showup__prev',
        activeClass: 'card-active'
    })
    showupSlider.init()
})