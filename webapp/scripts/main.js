import Header from './Header.js'
import TabsCollection from './Tabs.js'
import VideoPlayerCollection from './VideoPlayer.js'
import ExpandableContentCollection from './ExpandableContent.js'
import InputMaskCollection from './InputMask.js'
import SelectCollection from './Select.js'
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'


async function loadComponent(selector, path) {
    const element = document.querySelector(selector)

    if (!element) {
        console.error(`Nie znaleziono elementu: ${selector}`)
        return
    }

    try {
        const response = await fetch(path)

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
        }

        const html = await response.text()

        element.innerHTML = html

        console.log(`Komponent załadowany: ${path}`)
    } catch (error) {
        console.error(`Nie udało się załadować: ${path}`, error)
    }
}


async function init() {
    await loadComponent('[data-header]', './components/header.html')
    await loadComponent('[data-footer]', './components/footer.html')

    new Header()
    new TabsCollection()
    new VideoPlayerCollection()
    new ExpandableContentCollection()
    new InputMaskCollection()
    new SelectCollection()

    defineScrollBarWidthCSSVar()
}


init().catch((error) => {
    console.error('Błąd podczas inicjalizacji:', error)
})