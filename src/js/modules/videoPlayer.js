export default class VideoPlayer {
    constructor({playBtnSelector, closeBtnSelector = '.overlay .close', overlaySelector = '.overlay', moduleClass}) {
        this.playBtns = document.querySelectorAll(playBtnSelector)
        this.closeBtn = document.querySelector(closeBtnSelector)
        this.overlay = document.querySelector(overlaySelector)
        this.videoId = null
        this.player = null
        this.done = false
        this.moduleClass = moduleClass
    }

    openPlayer(id) {
        if (this.videoId !== id) {
            this.videoId = id

            if (!this.player) this.createPlayer()
            else this.loadVideoById()
        }
        
        this.overlay.style.display = 'flex'
        this.overlay.classList.remove('fadeOut')
        this.overlay.classList.add('fadeIn')
    }

    closePlayer() {
        this.pauseVideo()
        this.overlay.classList.remove('fadeIn')
        this.overlay.classList.add('fadeOut')
        setTimeout(() => this.overlay.style.display = '', this.overlay.style.animationDuration.replace('s', '') * 1000)
    }

    createPlayer() {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: this.videoId,
            playerVars: { 'autoplay': 0 },

            events: {
                'onStateChange': () => this.onPlayerStateChange()
            }
        })
    }

    pauseVideo() {
        this.player.pauseVideo()
    }

    stopVideo() {
        this.player.stopVideo()
    }

    loadVideoById() {
        this.player.loadVideoById(this.videoId)
        this.stopVideo()
    }

    onPlayerStateChange() {
        const duration = this.player.getDuration(),
              currentTime = this.player.getCurrentTime()
        
        if ((currentTime >= duration / 2) && duration !== 0) this.unlockNextModuleIfPossible()
    }

    unlockNextModuleIfPossible() {
        const nextModule = this.currentModule.nextElementSibling

        if (nextModule && nextModule.classList.contains(this.moduleClass) && nextModule.querySelector('.closed')) {
            const nextModuleOpenBtn = this.pressedBtn.cloneNode(true)

            nextModule.style.filter = 'none'
            nextModule.style.opacity = '1'
            
            nextModule.querySelector(`.${this.pressedBtn.className}`).replaceWith(nextModuleOpenBtn)
            nextModuleOpenBtn.addEventListener('click', () => this.onPlayBtnClick(nextModuleOpenBtn))
        }
    }

    onPlayBtnClick(btn) {
        if (!btn.querySelector('.closed')) {
            this.openPlayer(btn.getAttribute('data-url'))

            this.pressedBtn = btn
            if (this.moduleClass) this.currentModule = this.pressedBtn.closest(`.${this.moduleClass}`)
        }
    }

    init() {
        this.overlay.classList.add('animated')
        this.overlay.style.animationDuration = '0.25s'
        
        this.playBtns.forEach(btn => btn.addEventListener('click', () => this.onPlayBtnClick(btn)))
        this.closeBtn.addEventListener('click', () => this.closePlayer())
    }
}