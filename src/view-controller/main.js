import {components} from "../view/components.js"

const changeView = (route) => {
    const container = document.getElementById('container')
    container.innerHTML = '';
    switch (route) {
        case '#/': { return container.appendChild(components.home())}
        case '#/SignUp': { return container.appendChild(components.singUp())}
        case "#/SignIn": { return container.appendChild(components.signIn())}
        case "#/Profile": { return container.appendChild(components.profile())}
            
            break;
    
        default:
            break;
    }
    
 console.log(route);
 
}

export {changeView}