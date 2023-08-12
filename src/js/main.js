import MainSlider from './modules/slider/MainSlider'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const mainSlider = new MainSlider({
        sliderSelector: '.page', 
        nextBtnSelector: '.next', 
        resetBtnSelector: '.sidecontrol > a', 
        popupSelector: '.hanson'
    })
    mainSlider.init()
})