export default class Accordion {
    constructor(triggerSelector, panelSelector) {
        this.triggers = document.querySelectorAll(triggerSelector)
        this.panels = document.querySelectorAll(panelSelector)
    }

    onTriggerClick(index) {
        const height = this.panels[index].scrollHeight + 'px'
        this.panels[index].style.maxHeight = this.panels[index].style.maxHeight === '0px' ? height : '0px' 
    }

    bindTriggers() {
        this.triggers.forEach((trigger, i) => {
            trigger.addEventListener('click', () => this.onTriggerClick(i))
        })
    }

    init() {
        this.panels.forEach(panel => {
            panel.style.display = 'block'
            panel.style.overflow = 'hidden'
            panel.style.transition = 'max-height 0.5s'
            panel.style.maxHeight = '0px'
        })
        this.bindTriggers()
    }
}