export default class VideoPlayer {
    constructor({openBtnSelector, closeBtnSelector = '.overlay .close', overlaySelector = '.overlay'}) {
        this.openBtns = document.querySelectorAll(openBtnSelector)
        this.closeBtn = document.querySelector(closeBtnSelector)
        this.overlay = document.querySelector(overlaySelector)
        this.videoId = null
        this.player = null
        this.done = false
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
            videoId: this.videoId
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
    }

    init() {
        console.log(this)

        this.overlay.classList.add('animated')
        this.overlay.style.animationDuration = '0.25s'
        
        this.openBtns.forEach(btn => btn.addEventListener('click', () => this.openPlayer(btn.getAttribute('data-url'))))
        this.closeBtn.addEventListener('click', () => this.closePlayer())
    }
}