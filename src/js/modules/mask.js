export default class Mask {
    constructor(inputSelector, mask = '+1 (___) ___-____') {
        this.inputs = document.querySelectorAll(inputSelector)
        this.mask = mask
        this.defaultValue = mask.replace(/\D/g, '')
    }
    
    bindInputs() {
        this.inputs.forEach(input => {
            ['focus', 'input', 'blur'].forEach(eventType => input.addEventListener(eventType, event => this.createMask(event)))
            input.addEventListener('click', () => input.selectionStart = input.value.length)
        })
    }

    createMask(event) {
        this.currentValue = event.target.value.replace(/\D/g, '').slice(0, 11)

        if (event.type === 'blur') {
            if (this.currentValue === this.defaultValue) event.target.value = ''
        } else {
            if (!this.currentValue) this.currentValue = this.defaultValue
            event.target.value = this.setMaskedValue()
        }
    }

    setMaskedValue() {
        let valueOffset = 0

        return this.mask.replace(/./g, match => {
            return /[_\d]/.test(match) && valueOffset < this.currentValue.length ? 
                   this.currentValue[valueOffset++] : 
                   valueOffset >= this.currentValue.length ? '' : match
        })
    }

    init() {
        this.bindInputs()
    }
}