import { changeView } from './view-controller/main.js';



const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init)
