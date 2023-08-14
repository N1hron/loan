export default class diffList {
    constructor({
        listSelector, 
        listItemSelector = '.officer__card-item:not(.officer__card-item:last-child)', 
        showMoreBtnSelector = '.officer__card-item:last-child'
    }) {
        this.list = document.querySelector(listSelector)
        this.listItems = this.list.querySelectorAll(listItemSelector)
        this.showMoreBtn = this.list.querySelector(showMoreBtnSelector)
        this.numberOfItems = this.listItems.length
        this.numberOfVisibleItems = 0
    }

    updateList() {
        for (let i = 0; i < this.numberOfVisibleItems; i++) {
            this.listItems[i].style.display = ''
            this.listItems[i].classList.add('animated', 'fadeIn')
        }

        if (this.numberOfVisibleItems === this.numberOfItems) {
            this.showMoreBtn.classList.add('animated', 'fadeOut')
            this.showMoreBtn.style.pointerEvents = 'none'
            
            setTimeout(() => {
                this.showMoreBtn.remove()
            }, getComputedStyle(this.showMoreBtn).animationDuration.slice(0, -1) * 1000)
        }
    }

    init() {
        console.log(this)

        this.listItems.forEach(item => item.style.display = 'none')
        this.showMoreBtn.addEventListener('click', () => {
            this.numberOfVisibleItems++
            this.updateList()
        })

        this.updateList()
    }
}