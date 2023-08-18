import MainSlider from './modules/slider/mainSlider'
import MiniSlider from './modules/slider/miniSlider'
import diffList from './modules/DiffList'
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    console.log('current pathname: ', location.pathname)

    if (location.pathname.includes('modules')) {

        // Code for modules page:

        const mainModulesSlider = new MainSlider({
            sliderSelector: '.moduleapp', 
            nextBtnSelector: '.next', 
            prevBtnSelector: '.prev',
            resetBtnSelector: '.sidecontrol > a'
        })
        mainModulesSlider.init()

        // Video player:

        const modulesVideoPlayer = new VideoPlayer({
            playBtnSelector: '.play',
            moduleClass: 'module__video-item'
        })
        modulesVideoPlayer.init()
    } else {

        // Siders:

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

        // Difference lists:

        const tenYearsList = new diffList({
            listSelector: '.officerold'
        })
        tenYearsList.init()

        const todayList = new diffList({
            listSelector: '.officernew'
        })
        todayList.init()

        // Video player:

        const mainPageVideoPlayer = new VideoPlayer({playBtnSelector: '.play'})
        mainPageVideoPlayer.init()
    }
})