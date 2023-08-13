import MainSlider from './modules/slider/MainSlider'
import MiniSlider from './modules/slider/MiniSlider'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    console.log(location.pathname)
    if (location.pathname.includes('modules')) {
        // Code for modules page
        const mainModulesSlider = new MainSlider({
            sliderSelector: '.moduleapp', 
            nextBtnSelector: '.next', 
            prevBtnSelector: '.prev',
            resetBtnSelector: '.sidecontrol > a'
        })
        mainModulesSlider.init()
    } else {
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
    
        const modulesSlider = new MiniSlider({
            sliderSelector: '.modules__content-slider',
            nextBtnSelector: '.modules__info-btns .slick-next',
            prevBtnSelector: '.modules__info-btns .slick-prev',
            activeClass: 'card-active'
        })
        modulesSlider.init()
    
        const feedSlider = new MiniSlider({
            sliderSelector: '.feed__slider',
            nextBtnSelector: '.feed__slider .slick-next',
            prevBtnSelector: '.feed__slider .slick-prev',
            slideClassName: 'feed__item',
            activeClass: 'feed__item-active'
        })
        feedSlider.init()
    }
})