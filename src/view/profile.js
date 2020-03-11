export default () => {
    const  viewProfile = `
    <h1>Profile!</h2>
    
    `;
    const divElement = document.createElement("div") 
    divElement.innerHTML = viewProfile; 
    return divElement; 
}