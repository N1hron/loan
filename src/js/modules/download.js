export default class Download {
    constructor(triggerSelector, path) {
        this.triggers = document.querySelectorAll(triggerSelector)
        this.path = path
    }

    download(path = this.path) {
        const a = document.createElement('a')
        a.setAttribute('href', path)
        a.setAttribute('download', '')
        a.click()
    }

    bindTriggers() {
        this.triggers.forEach(trigger => trigger.addEventListener('click', () => this.download()))
    }

    init() {
        this.bindTriggers()
    }
}