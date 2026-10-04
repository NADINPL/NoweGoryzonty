class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
        menuLink: '.header__menu-link',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.menuLinks = this.rootElement.querySelectorAll(this.selectors.menuLink)

        this.setActiveLink()
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html'

        this.menuLinks.forEach((link) => {
            const linkPage = link.getAttribute('href').split('/').pop()

            if (linkPage === currentPage) {
                link.classList.add(this.stateClasses.isActive)
            }
        })
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default Header