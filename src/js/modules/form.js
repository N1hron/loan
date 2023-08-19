export default class Form {
    constructor(formSelector, url) {
        this.form = document.querySelector(formSelector)
        this.submitBtn = this.form.querySelector('button[type="submit"]')
        this.message = document.createElement('div')
        this.url = url
        this.allowSubmit = true
    }

    async sendFormData() {
        const formData = new FormData(this.form)

        this.message.className = 'form__message animated fadeIn'
        this.submitBtn.after(this.message)
        this.message.textContent = 'Loading...'

        try {
            const response = await fetch(this.url, {
                method: 'POST',
                body: formData
            })
            
            if (!response.ok) throw new Error('Could not send form data, status: ' + response.status + ` (${response.statusText})`)
            
            const txt = await response.text()
            console.log(txt)

            this.message.classList.add('form__message_success')
            this.message.textContent = 'We will contact you soon!'

            this.form.reset()
        } catch(error) {
            console.error(error)

            this.message.classList.add('form__message_error')
            this.message.textContent = 'Something went wrong...'
        } finally {
            clearTimeout(this.timeoutId)
            this.timeoutId = setTimeout(() => {
                this.message.classList.add('fadeOut')
                setTimeout(() => {
                    this.message.remove()
                    this.allowSubmit = true
                }, getComputedStyle(this.message).animationDuration.replace('s', '') * 1000)
            }, 5000)
        }
    }

    enableEmailValidation() {
        this.form.querySelector('[type="email"]').addEventListener('input', function() {
            this.value = this.value.replace(/[а-яё]/ig, '')
        })
    }

    onSubmit(event) {
        event.preventDefault()
        if (this.allowSubmit) {
            this.allowSubmit = false
            this.sendFormData()
        }
    }

    init() {
        this.form.addEventListener('submit', event => this.onSubmit(event))
        this.enableEmailValidation()
    }
}