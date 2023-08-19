import MainSlider from './modules/slider/mainSlider'
import MiniSlider from './modules/slider/miniSlider'
import diffList from './modules/DiffList'
import VideoPlayer from './modules/videoPlayer'
import Accordion from './modules/accordion'
import Download from './modules/download'
import Form from './modules/form'
import Mask from './modules/mask'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

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

        // Accordion:

        const moduleOneAccordion = new Accordion('.module__info-show', '.msg')
        moduleOneAccordion.init()

        // Download PDF:

        const pdfDownload = new Download('.download', 'assets/dummy.pdf')
        pdfDownload.init()

    } else {

        // Siders:

        const mainSlider = new MainSlider({
            sliderSelector: '.page', 
            nextBtnSelector: '.next', 
            resetBtnSelector: '.sidecontrol > a', 
            popupSelector: '.hanson',
            popupSlide: 3
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
            activeClass: 'card-active',
            auto: true
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

        // Forms:

        const helpForm = new Form('.join__evolution form', 'assets/question.php')
        helpForm.init()

        const scheduleFrom = new Form('.schedule__form form', 'assets/question.php')
        scheduleFrom.init()

        // Phone mask:

        const usPhoneMask = new Mask('input[name="phone"]')
        usPhoneMask.init()
    }
})